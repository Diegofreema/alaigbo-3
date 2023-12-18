'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';

import { useToast } from './ui/use-toast';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { DatePickerInput, TimeInput } from '@mantine/dates';
import FileUpload from './FileUpload';
import moment from 'moment';
import { createEvent } from '../lib/actions/event.action';
import { Textarea } from './ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),

  imageUrl: z.string().min(2, {
    message: 'Image url is required',
  }),
  venue: z.string().min(3, {
    message: 'Venue is required',
  }),
  startDate: z
    .date()
    .min(new Date(), { message: 'Please select a valid date' }),
  endDate: z
    .date()
    .min(new Date(), { message: 'Please select a valid date' })
    .optional(),

  time: z.string().min(moment(new Date()).format('HH:mm').toString(), {
    message: 'Time is required',
  }),
  des: z
    .string()
    .min(10, { message: 'Description should be a minimum of 10 words' }),
  heading: z
    .string()
    .min(5, { message: 'Heading should be a minimum of 5 words' })
    .optional(),
  subHeading: z
    .string()
    .min(5, { message: 'Sub Heading should be a minimum of 5 words' })
    .optional(),
});

const AddEvent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
      startDate: new Date(),
      endDate: new Date(),
      venue: '',
      time: moment(new Date()).format('HH:mm'),
      des: '',
      heading: '',
      subHeading: '',
    },
  });

  const isLoading = form.formState.isSubmitting;
  const onInvalid = (errors) => console.error(errors);
  async function onSubmit(values) {
    if (moment(values.endDate).isBefore(values.startDate)) {
      toast({
        variant: 'destructive',
        title: 'Invalid Date',
        description: 'End Date must be after Start Date',
      });
      return;
    }
    try {
      await createEvent(
        values.name,
        values.imageUrl,
        values.venue,
        values.startDate,
        values.endDate,
        values.time,
        values.heading,
        values.subHeading,
        values.des
      );
      console.log(values);

      toast({
        variant: 'success',
        title: 'Success',
        description: 'You have added a new Event',
      });
      form.reset();
      router.refresh();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Something went wrong',
      });
      console.log(error);
    }
  }
  if (!isMounted) return null;
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onInvalid)}
          className="!space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Event Name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="venue"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Venue</FormLabel>
                <FormControl>
                  <Input placeholder="Venue" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="heading"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Heading</FormLabel>
                <FormControl>
                  <Input placeholder="Heading" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subHeading"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub Heading</FormLabel>
                <FormControl>
                  <Input placeholder="Sub Heading" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2  ">
                <FormLabel>Start Date</FormLabel>
                <FormControl className="!pr-3">
                  <DatePickerInput
                    placeholder="Pick a date"
                    value={field.value}
                    onChange={field.onChange}
                    className="!w-full"
                    styles={{
                      wrapper: {
                        border: '1px solid #cccccc',
                        borderRadius: 5,
                        paddingTop: 1,
                        paddingBottom: 1,
                      },
                      input: {
                        border: 'none',
                        outline: 'none',
                      },
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2  ">
                <FormLabel>End Date</FormLabel>
                <FormControl className="!pr-3">
                  <DatePickerInput
                    placeholder="Pick a date"
                    value={field.value}
                    onChange={field.onChange}
                    className="!w-full"
                    styles={{
                      wrapper: {
                        border: '1px solid #cccccc',
                        borderRadius: 5,
                        paddingTop: 1,
                        paddingBottom: 1,
                      },
                      input: {
                        border: 'none',
                        outline: 'none',
                      },
                    }}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2  ">
                <FormLabel>Time</FormLabel>
                <FormControl className="!pr-3">
                  <TimeInput
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Time"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="des"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Event Description"
                    className="resize-none border  mt-4"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <FileUpload
                    endpoint="eventImg"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isLoading}
            variant={'link'}
            className="w-full"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEvent;
