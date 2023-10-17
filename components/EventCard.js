'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { IconTrash } from '@tabler/icons-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
import { useDeleteModal } from '@/hooks/useDeleteModal';

const EventCard = ({
  startDate,
  imgUrl,
  eventName,
  venue,
  time,
  id,
  endDate,
  heading,
  subHeading,
  description,
}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const { onOpen, getId } = useDeleteModal();
  const handleDelete = async (id) => {
    onOpen();
    getId(id);
  };
  if (!isMounted) {
    return null;
  }

  return (
    <Card className=" mb-4 w-full">
      <CardContent className="space-y-2   pt-4">
        <div className="rounded-md relative w-[100%] h-[200px] overflow-hidden">
          <Image
            fill
            priority
            alt="image"
            src={imgUrl}
            className=" object-cover"
          />
        </div>
        <div>
          <p>
            Date: {startDate} {endDate && `to ${endDate}`}
          </p>
          <p>Time: {time}</p>
        </div>
      </CardContent>
      <CardContent>
        {heading && <p>Heading: {heading}</p>}
        {subHeading && <p>Sub Heading: {subHeading}</p>}
        {description && <p>Description: {description}</p>}
      </CardContent>
      <CardFooter className="flex justify-between flex-col sm:!flex-row space-y-4 sm:!space-y-0">
        <div>
          <p className="uppercase    text-sm font-bold">Theme: {eventName}</p>
          <p className="capitalize  text-sm font-semibold">Venue: {venue}</p>
        </div>

        <IconTrash
          size={30}
          color="red"
          className="cursor-pointer"
          onClick={() => handleDelete(id)}
        />
      </CardFooter>
    </Card>
  );
};

export default EventCard;
