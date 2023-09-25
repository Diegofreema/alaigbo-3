'use server';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { connectToDB } from '../mongoose';
import Book from '../models/booking';
import Payment from '../models/payment';

export const booked = async () => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    connectToDB();
    const registered = await Book.findOne({ userId });
    if (!registered) {
      return null;
    }
    return registered;
  } catch (error) {
    return null;
  }
};
export const alreadyBooked = async () => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    connectToDB();
    const registered = await Book.find({ userId });

    if (!registered) {
      return null;
    }
    return !!registered;
  } catch (error) {
    return null;
  }
};

export const payment = async (type, email) => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    connectToDB();
    await Payment.create({
      type,
      email,
      userId,
    });
  } catch (error) {
    console.log(error);
  }
};
export const checkPayment = async () => {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  try {
    connectToDB();
    const paid = await Payment.findOne({
      userId,
    });
    return !!paid;
  } catch (error) {
    console.log(error);
  }
};
