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
import { useDonateModal } from '@/hooks/modal';
import { useToast } from '../ui/use-toast';
import { PaystackButton } from 'react-paystack';
import { useUser } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import { CheckCircle, Circle, X } from 'lucide-react';
import { payment } from '@/lib/actions/book.actions';

const DonateFormModal = () => {
  const [amount, setAmount] = useState('10000');
  const { user } = useUser();
  const config = {
    reference: new Date().getTime().toString(),
    email: user?.emailAddresses[0]?.emailAddress || '',
    amount: parseInt(amount) * 100,
    publicKey: 'pk_test_9d6719813f8486351fdd884f3dd8f739b34c6489',
  };
  const onSuccess = async (reference) => {
    try {
      toast({
        variant: 'success',
        title: 'Success',
        description: 'Thank you for your donation',
      });
      setAmount('250000');
      await payment(type, user?.emailAddresses[0]?.emailAddress);
    } catch (error) {
      console.log(error);
    }
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    toast({
      variant: 'white',
      title: 'Payment Canceled',
      description: 'You canceled the payment',
    });
  };
  const componentProps = {
    ...config,
    text: 'Pay',
    onSuccess: (reference) => onSuccess(reference),
    onClose: onClose,
  };
  // const config = {
  //   public_key: 'FLWPUBK_TEST-ff992f1bcd7d42f54d58fb95e579e908-X',
  //   tx_ref: Date.now(),
  //   amount: parseInt(amount),
  //   currency: 'NGN',
  //   payment_options: 'card,mobilemoney,ussd',
  //   customer: {
  //     email: user?.emailAddresses[0]?.emailAddress || '',

  //     name: `${user?.firstName} ${user?.lastName}`,
  //   },
  //   customizations: {
  //     title: 'Book A Seat',
  //     description: 'Pay to book a seat at the Alaigbo Youth Summit',
  //     logo: '/logo.jpg',
  //   },
  // };

  // const handlePayment = async () => {
  //   handleFlutterPayment({
  //     callback: async (response) => {
  //       if (response.status === 'completed') {
  //         toast({
  //           variant: 'success',
  //           title: 'Success',
  //           description: 'Thank you for your donation',
  //         });
  //         setAmount('250000');
  //         await payment(type, user?.emailAddresses[0]?.emailAddress);
  //       } else {
  //         toast({
  //           variant: 'destructive',
  //           title: 'Error ',
  //           description: 'Something went wrong',
  //         });
  //       }
  //       closePaymentModal();
  //     },
  //     onClose: () => {
  //       closePaymentModal();
  //       toast({
  //         variant: 'white',
  //         title: 'Payment Canceled',
  //         description: 'You canceled the payment',
  //       });
  //     },
  //   });
  // };

  // const initializePayment = usePaystackPayment(config);
  const [type, setType] = useState('Regular');
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const modal = useDonateModal();
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

          <DialogHeader
            onClick={() => {
              setAmount('250000');
              setType('Vip');
            }}
            className={cn(
              'p-4 border  rounded-md cursor-pointer',
              type === 'Vip' ? 'border-[#DE5000]' : 'border-black'
            )}
          >
            <DialogTitle className="!justify-start space-x-2 flex items-center">
              {type === 'Vip' ? (
                <CheckCircle size={15} className="mr-1 text-[#DE5000]" />
              ) : (
                <Circle size={15} className="mr-1" />
              )}
              Vip
            </DialogTitle>
            <DialogTitle>250,000 naira</DialogTitle>
            <DialogDescription>
              Hotel,Security,Transportation and Feeding covered
            </DialogDescription>
          </DialogHeader>
          <DialogHeader
            onClick={() => {
              setAmount('10000');
              setType('Regular');
            }}
            className={cn(
              'p-4 border cursor-pointer  rounded-md',
              type === 'Regular' ? 'border-[#DE5000]' : 'border-black'
            )}
          >
            <DialogTitle className="!justify-start space-x-2 flex items-center">
              {type === 'Regular' ? (
                <CheckCircle size={15} className="mr-1 text-[#DE5000]" />
              ) : (
                <Circle size={15} className="mr-1" />
              )}
              Regular
            </DialogTitle>
            <DialogTitle>10,000 naira</DialogTitle>
          </DialogHeader>
          <DialogHeader
            onClick={() => {
              setAmount('7000');
              setType('Registered');
            }}
            className={cn(
              'p-4 border cursor-pointer  rounded-md',
              type === 'Registered' ? 'border-[#DE5000]' : 'border-black'
            )}
          >
            <DialogTitle className="!justify-start space-x-2 flex items-center">
              {type === 'Registered' ? (
                <CheckCircle size={15} className="mr-1 text-[#DE5000]" />
              ) : (
                <Circle size={15} className="mr-1" />
              )}
              Registered
            </DialogTitle>
            <DialogTitle>7,000 naira</DialogTitle>

            <DialogDescription>Registered Members</DialogDescription>
          </DialogHeader>
          <DialogFooter className={'w-full'}>
            <PaystackButton
              {...componentProps}
              className="w-full py-2 bg-[#DE5000] text-white"
            />
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DonateFormModal;
