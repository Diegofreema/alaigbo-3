'use client';
import DeleteModal from '../../../../../../components/DeleteModal';
import { Button } from '../../../../../../components/ui/button';
import { useDeleteModal } from '../../../../../../hooks/useDeleteModal';
import Image from 'next/image';
import React from 'react';

const DetailCard = ({
  firstName,
  lastName,
  email,
  number,
  state,
  town,
  village,
  gender,
  memberType,
  memberId,
  imgUrl,
  id,
  group,
  middleName,
  bio,
}) => {
  const { onOpen, getMember } = useDeleteModal();

  const handleDelete = async (id) => {
    onOpen();
    getMember(id);
  };
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
        <DeleteModal />
        <div className="flex items-center justify-center">
          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden relative">
            <Image
              src={imgUrl}
              alt={firstName}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold">First Name: {firstName} </h3>
          <h3 className="font-semibold">Last Name: {lastName} </h3>
          {middleName && (
            <h3 className="font-semibold">Middle Name: {middleName} </h3>
          )}
          <h3 className="font-semibold">Email: {email} </h3>
          <h3 className="font-semibold">Number: {number} </h3>
          <h3 className="font-semibold">State: {state} </h3>
          <h3 className="font-semibold">Town: {town} </h3>
          <h3 className="font-semibold">Village: {village} </h3>
          <h3 className="font-semibold">Gender: {gender} </h3>
          <h3 className="font-semibold">Group: {group} </h3>
          <h3 className="font-semibold">Member Type: {memberType} </h3>
          <h3 className="font-semibold">Member Id: {memberId} </h3>
        </div>
      </div>
      <div className="mt-16">
        <div>
          <h3 className="font-semibold">Bio </h3>
          <p>{bio}</p>
        </div>
        <div className="mt-8">
          <Button variant="destructive" onClick={() => handleDelete(id)}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
