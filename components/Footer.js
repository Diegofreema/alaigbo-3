'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { useForm } from 'react-hook-form';
import { useToast } from './ui/use-toast';
import axios from 'axios';
const socialIcon = [
  {
    link: 'https://twitter.com/@AlaIgbo_YF',
    Icon: FaTwitter,
  },

  {
    link: 'https://chat.whatsapp.com/FnBEvJrBkL7ARqkSEZTZNc',
    Icon: FaWhatsapp,
  },

  {
    link: 'https://www.instagram.com/AlaIgboYouth',
    Icon: FaInstagram,
  },
];
const MotionLink = motion(Link);
const Footer = () => {
  const { toast } = useToast();
  const formSchema = z.object({
    email: z
      .string()
      .min(2, {
        message: 'A valid email is required.',
      })
      .email(),
  });
  const pathname = usePathname();
  const year = new Date().getFullYear();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values) {
    const { email } = values;
    try {
      const response = await axios.post('/api/subscriber', { email });

      if (response.status === 200) {
        toast({
          variant: 'success',
          title: 'Success',
          description: 'Thank you for subscribing.',
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message,
      });
    } finally {
      form.reset();
    }
  }
  const isLoading = form.formState.isSubmitting;
  const isAdminRoute = pathname.startsWith('/admin');
  return (
    <motion.footer
      className={cn(
        'bg-[#000] px-4 pb-6 !z-40 ',
        pathname === '/member/*' ? 'hidden' : 'block',
        isAdminRoute && 'md:ml-20'
      )}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 gap-4 grid-cols-1 py-8 ">
          <div>
            <div>
              <p className="text-white text-center mb-4">
                STAY CONNECTED VIA EMAIL
              </p>
              <div className="flex lg:space-x-3 flex-col lg:flex-row gap-y-4 justify-center items-center">
                <p className="text-white text-center lg:text-left w-[300px] text-sm ">
                  Be the first to receive progress updates and new offers from
                  ALAIGBO:
                </p>
                <div>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className=" flex space-x-2"
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                className="flex-1 h-[30px] py-1 "
                                placeholder="Email"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        disabled={isLoading}
                        className="  h-[30px] text-white text-sm flex items-center justify-center p-2 bg-[#00AA00] rounded-tr-sm rounded-br-sm cursor-pointer"
                        type="submit"
                      >
                        {' '}
                        SUBSCRIBE
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <motion.div className="md:ml-16 flex flex-col items-center ">
            <p className="text-white mb-8">CONNECT WITH US</p>
            <div className="flex space-x-3 items-center">
              {socialIcon.map(({ link, Icon }, i) => (
                <MotionLink
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3, type: 'spring' }}
                  className="inline-block"
                  href={link}
                  key={i}
                  target="_blank"
                >
                  {' '}
                  <Icon color="white" size={25} />{' '}
                </MotionLink>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div className="lg:text-right text-center md:pr-8 mt-4 pb-4">
          <p className="text-xs text-white">
            Copyright © {year}. ALAIGBO All rights reserved Privacy Policy Terms
            & Conditions
          </p>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
