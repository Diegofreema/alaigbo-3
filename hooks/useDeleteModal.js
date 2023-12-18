import { deleteEvent } from '../lib/actions/event.action';
import { deleteMember } from '../lib/actions/user.actions';
import { redirect } from 'next/navigation';
import { create } from 'zustand';

export const useDeleteModal = create((set) => ({
  isOpen: false,
  onOpen: () =>
    set({
      isOpen: true,
    }),
  onClose: () => set({ isOpen: false }),
  id: '',
  getId: (id) => set({ id }),
  deleteEvent: async (id) => {
    try {
      await deleteEvent(id);
    } catch (error) {
      console.log(error);
    }
  },
  memberId: '',
  getMember: (id) => set({ memberId: id }),
  deleteMemberFn: async (id) => {
    try {
      await deleteMember(id);
    } catch (error) {
      console.log(error);
    }
  },
}));
