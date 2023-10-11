import { fetchMembers } from '@/lib/actions/user.actions';
import React from 'react';

const page = async () => {
  const members = await fetchMembers();
  const allMembers =
    members.length > 0 ? (
      members?.map((member, i) => (
        <tr key={member._id} className="overflow-x-scroll cursor-pointer ">
          <td className="border !px-2 border-slate-700">{i + 1}</td>
          <td className="border !px-2 border-slate-700">{member?.firstName}</td>
          <td className="border !px-2 border-slate-700">{member?.lastName}</td>
          <td className="border !px-2 border-slate-700">{member?.email}</td>
          <td className="border !px-2 border-slate-700">{member?.number}</td>
          <td className="border !px-2 border-slate-700">{member?.state}</td>
          <td className="border !px-2 border-slate-700">{member?.town}</td>
          <td className="border !px-2 border-slate-700">{member?.village}</td>
          <td className="border !px-2 border-slate-700">{member?.gender}</td>
        </tr>
      ))
    ) : (
      <h2 className="font-semibold text-center text-2xl">No Members</h2>
    );
  return (
    <div className="min-h-screen py-[120px] !overflow-x-scroll px-6">
      <div className="">
        <table className="table-auto border-spacing-2     border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border px-2 border-slate-600">NO</th>
              <th className="border px-2 border-slate-600">First Name</th>
              <th className="border px-2 border-slate-600">Last Name</th>
              <th className="border px-2 border-slate-600">Email</th>
              <th className="border px-2 border-slate-600">Phone</th>
              <th className="border px-2 border-slate-600">State</th>
              <th className="border px-2 border-slate-600">Town</th>
              <th className="border px-2 border-slate-600">Village</th>
              <th className="border px-2 border-slate-600">Gender</th>
            </tr>
          </thead>
          <tbody>{allMembers}</tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
