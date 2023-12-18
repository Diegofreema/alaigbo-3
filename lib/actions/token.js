'use server';

import { v4 } from 'uuid';
import { AccessToken } from 'livekit-server-sdk';
import Stream from '../models/stream';
import { auth } from '@clerk/nextjs';
import User from '../models/user';

export const createViewerToken = async (hostIdentity) => {
  const { userId } = auth();
  if (!userId) {
    throw new Error('User not found');
  }
  let self;
  try {
    const stream = await Stream.findOne({ creator: userId });

    if (!stream) {
      throw new Error('Stream not found');
    }

    self = await User.findOne({ userId: stream?.creator });
  } catch {
    const id = v4();

    self = { userId, firstName };
  }

  const host = await User.findOne({ userId: hostIdentity });

  if (!host) {
    throw new Error('User not found');
  }

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY,
    process.env.LIVEKIT_API_SECRET,
    {
      identity: 'Admin',
      name: 'Admin',
    }
  );

  token.addGrant({
    room: host?.userId,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
};
