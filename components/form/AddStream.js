'use client';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';
import { createStream } from '../../lib/actions/stream.action';
import { useUser } from '@clerk/nextjs';
import { cn } from '../../lib/utils';
import { CheckCircle, Circle, X } from 'lucide-react';

import { useStream } from '../../hooks/stream';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  link: z.string().min(2, {
    message: 'Link is required.',
  }),
});
const StreamModal = () => {
  const { user } = useUser();

  const onSuccess = async () => {};
  const modal = useStream();
  // you can call this function anything
  const onClose = () => {
    toast({
      variant: 'white',
      title: 'Payment Canceled',
      description: 'You canceled the payment',
    });
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: '',
    },
  });

  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    try {
      await createStream(values.link);
      form.reset();
      toast({
        variant: 'success',
        title: 'Success',
        description: 'You have added a new stream',
      });
    } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Something went wrong',
      });
    }

    modal.onClose();
  }

  const isSubmitting = form.formState.isSubmitting;
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  });

  if (!mounted) return null;
  return (
    <div>
      <Dialog open={modal.isOpen} className="">
        <DialogContent className="space-y-3 ">
          <X className="absolute top-3 right-3" onClick={modal.onClose} />

          <DialogHeader className={cn('p-4 border cursor-pointer  rounded-md')}>
            <DialogTitle className="!justify-start  flex items-center">
              Add link
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Link" {...field} />
                    </FormControl>
                    <FormDescription>Link to your live stream</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button disabled={isSubmitting} type="submit">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StreamModal;
