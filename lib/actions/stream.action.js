'use server';

import { auth } from '@clerk/nextjs';
import Stream from '../models/stream';
import { NextResponse } from 'next/server';
import { connectToDB } from '../mongoose';
import { revalidatePath } from 'next/cache';

export const getStream = async () => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    connectToDB();
    const stream = await Stream.find().sort({ createdAt: -1 });
    if (!stream) {
      return { message: 'No Streams found' };
    }
    const safeStream = stream.map((item) => {
      return {
        id: item?._id.toString(),
        link: item?.link,
      };
    });
    return safeStream;
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 });
  }
};

export const createStream = async (value) => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    connectToDB();

    const stream = await Stream.create({
      link: value,
    });
    revalidatePath('/stream');
    revalidatePath('/admin/stream');

    return { message: 'Stream created successfully' };
  } catch (error) {
    console.log(error);
    return { message: 'Internal Server Error' };
  }
};
