'use client';
import { useDeleteModal } from '@/hooks/useDeleteModal';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const MemberComponent = ({
  firstName,
  lastName,
  email,
  number,
  state,
  town,
  village,
  gender,
  i,
  id,
}) => {
  const { onOpen, getMember } = useDeleteModal();
  const router = useRouter();

  const handleDelete = async (id) => {
    onOpen();
    getMember(member._id);
  };
  return (
    <tr
      className="overflow-x-scroll cursor-pointer "
      onClick={() => router.push(`/admin/members/${id}`)}
    >
      <td className="border !px-2 border-slate-700">{i + 1}</td>
      <td className="border !px-2 border-slate-700">{firstName}</td>
      <td className="border !px-2 border-slate-700">{lastName}</td>
      <td className="border !px-2 border-slate-700">{email}</td>
      <td className="border !px-2 border-slate-700">{number}</td>
      <td className="border !px-2 border-slate-700">{state}</td>
      <td className="border !px-2 border-slate-700">{town}</td>
      <td className="border !px-2 border-slate-700">{village}</td>
      <td className="border !px-2 border-slate-700">{gender}</td>
    </tr>
  );
};

export default MemberComponent;
