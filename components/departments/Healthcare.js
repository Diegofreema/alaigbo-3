'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useToast } from '../ui/use-toast';

const Healthcare = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const groupFormatted = group?.toLowerCase();
  if (groupFormatted !== params && memberType !== 'Executive') {
    toast({
      variant: 'destructive',
      title: 'Not authorized!!',
      description:
        'Only members of this group can access this page, you will be redirected to your group',
    });
    router.push(`/department/${groupFormatted}`);
  }
  if (!mounted) {
    return null;
  }
  return <div className="min-h-screen items-center justify-center"></div>;
};

export default Healthcare;
