'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';

import { usePathname, useRouter } from 'next/navigation';
import { useToast } from './ui/use-toast';
import { useDeleteModal } from '@/hooks/useDeleteModal';
import { ColorRing } from 'react-loader-spinner';
const DeleteModal = () => {
  const { isOpen, onClose, deleteEvent, id, deleteMemberFn, memberId } =
    useDeleteModal();
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    if (pathname === '/admin/events') {
      setLoading(true);
      await deleteEvent(id);
      setLoading(false);
    } else {
      setLoading(true);
      await deleteMemberFn(memberId);
      router.push('/admin/members');
      setLoading(false);
    }

    onClose();
    router.refresh();
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <div className="  !space-x-4">
            {!loading && (
              <Button
                disabled={loading}
                size={'lg'}
                className="!border-none !outline-none"
                variant={'destructive'}
                onClick={handleDelete}
              >
                {loading ? (
                  <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="blocks-loading"
                    wrapperClass="blocks-wrapper"
                    colors={['#000', '#000']}
                  />
                ) : (
                  'Yes'
                )}
              </Button>
            )}

            <Button
              size={'lg'}
              className="!border-none !outline-none "
              variant={'secondary'}
              onClick={onClose}
            >
              No
            </Button>
          </div>
          <DialogDescription>
            This action cannot be undone. Clicking yes will permanently delete
            this from your server.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
