'use server';
import { auth } from '@clerk/nextjs';
import { connectToDB } from '../mongoose';
import {
  IngressAudioEncodingPreset,
  IngressInput,
  IngressClient,
  IngressVideoEncodingPreset,
  RoomServiceClient,
} from 'livekit-server-sdk';

import { TrackSource } from 'livekit-server-sdk/dist/proto/livekit_models';

import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import Stream from '../models/stream';

const roomService = new RoomServiceClient(
  process.env.LIVEKIT_API_URL || '',
  process.env.LIVEKIT_API_KEY || '',
  process.env.LIVEKIT_API_SECRET || ''
);

const ingressClient = new IngressClient(process.env.LIVEKIT_API_URL || '');

export const resetIngresses = async (hostIdentity) => {
  const ingresses = await ingressClient.listIngress({
    roomName: hostIdentity,
  });

  const rooms = await roomService.listRooms([hostIdentity]);

  for (const room of rooms) {
    await roomService.deleteRoom(room.name);
  }

  for (const ingress of ingresses) {
    if (ingress.ingressId) {
      await ingressClient.deleteIngress(ingress.ingressId);
    }
  }
};

export const createIngress = async (ingressType) => {
  const { userId, user } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  await resetIngresses(userId);

  const options = {
    name: user?.firstName,
    roomName: userId,
    participantName: user?.firstName,
    participantIdentity: userId,
  };

  if (ingressType === IngressInput.WHIP_INPUT) {
    options.bypassTranscoding = true;
  } else {
    options.video = {
      source: TrackSource.CAMERA,
      preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS,
    };
    options.audio = {
      source: TrackSource.MICROPHONE,
      preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS,
    };
  }

  const ingress = await ingressClient.createIngress(ingressType, options);

  if (!ingress || !ingress.url || !ingress.streamKey) {
    throw new Error('Failed to create ingress');
  }
  connectToDB();
  const stream = await Stream.findOne({ creator: userId });

  stream.ingressId = ingress.ingressId;
  stream.streamKey = ingress.streamKey;
  stream.serverUrl = ingress.url;

  await stream.save();
  revalidatePath(`/admin/keys`);
  return ingress;
};
