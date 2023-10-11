import { findBooked } from '@/lib/actions/book.actions';

import React from 'react';

const page = async () => {
  const booked = await findBooked();
  const allBookedMembers =
    booked.length > 0 &&
    booked?.map((book, i) => (
      <tr key={book?._id} className="overflow-x-scroll ">
        <td className="border !px-2 border-slate-700">{i + 1}</td>
        <td className="border !px-2 border-slate-700">{book?.firstName}</td>
        <td className="border !px-2 border-slate-700">{book?.lastName}</td>
        <td className="border !px-2 border-slate-700">{book?.email}</td>
        <td className="border !px-2 border-slate-700">{book?.number}</td>
        <td className="border !px-2 border-slate-700">{book?.location}</td>
        <td className="border !px-2 border-slate-700">{book?.accommodation}</td>
        <td className="border !px-2 border-slate-700">{book?.participants}</td>
      </tr>
    ));
  return (
    <div className="min-h-screen py-[120px]">
      <div className="px-6">
        {allBookedMembers.length > 0 ? (
          <table className="table-auto border-spacing-2 !overflow-x-scroll px-6  border-collapse border border-slate-500">
            <thead>
              <tr className=" cursor-pointer ">
                <th className="border px-2 border-slate-600">NO</th>
                <th className="border px-2 border-slate-600">First Name</th>
                <th className="border px-2 border-slate-600">Last Name</th>
                <th className="border px-2 border-slate-600">Email</th>
                <th className="border px-2 border-slate-600">Phone</th>
                <th className="border px-2 border-slate-600">Location</th>
                <th className="border px-2 border-slate-600">Accommodation</th>
                <th className="border px-2 border-slate-600">Member Type</th>
              </tr>
            </thead>
            <tbody>{allBookedMembers}</tbody>
          </table>
        ) : (
          <h2 className="font-semibold text-center text-2xl">
            Nobody Has Booked
          </h2>
        )}
      </div>
    </div>
  );
};

export default page;
