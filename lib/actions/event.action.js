'use server';
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import Event from '../models/event';
import { connectToDB } from '../mongoose';

export async function createEvent(
  eventName,
  imgUrl,
  venue,
  startDate,
  endDate,
  time,
  heading,
  subHeading,
  description
) {
  const { userId: id } = auth();

  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  connectToDB();
  try {
    await Event.create({
      eventName,
      imgUrl,
      startDate,
      endDate,
      time,
      venue,
      heading,
      subHeading,
      description,
    });
  } catch (error) {
    console.log(error);
    throw new Error('Failed to create event', 'Event error');
  }
}
export async function fetchEvent() {
  const { userId: id } = auth();

  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    connectToDB();

    const events = await Event.find();
    const safeEvents = events.map((item) => {
      return {
        id: item?._id,
        eventName: item?.eventName,
        startDate: item?.startDate?.toString(),
        endDate: item?.endDate?.toString(),
        time: item?.time?.toString(),
        venue: item?.venue,
        imgUrl: item?.imgUrl,
        heading: item?.heading,
        subHeading: item?.subHeading,
        description: item?.description,
      };
    });
    return safeEvents;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get events', 'Event error');
  }
}
export async function deleteEvent(eventId) {
  const { userId: id } = auth();

  if (!id) {
    return new NextResponse('Unauthorized', { status: 401 });
  }

  try {
    connectToDB();
    const event = await Event.findById(eventId);
    if (!event) {
      return new NextResponse('Event not found', { status: 404 });
    }
    await Event.findByIdAndDelete(eventId);
  } catch (error) {
    console.log(error);
    throw new Error('Failed to delete events', 'Event error');
  }
}
