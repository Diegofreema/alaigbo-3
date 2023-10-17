'use client';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Group, Pagination } from '@mantine/core';
import MemberComponent from '../members/_components/MemberComponent';
import { usePagination } from '@mantine/hooks';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const itemsPerPage = 20;
const Filter = ({ member }) => {
  const [input, setInput] = useState('');
  const [members, setMembers] = useState(member.slice(0, itemsPerPage));

  const pagination = usePagination({
    total: Math.ceil(member.length / itemsPerPage),
    initialPage: 1,
    onChange: (page) => {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      setMembers(member.slice(start, end));
    },
  });

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const filteredMembers =
      input.length > 2 ? member.filter((item) => filterMember(item)) : member;
    setMembers(filteredMembers.slice(0, itemsPerPage));
  }, [input, member, itemsPerPage]);

  const filterMember = (item) => {
    const lowerInput = input.toLowerCase();
    const { firstName, lastName, email, state, town, village, gender } = item;
    return (
      firstName.toLowerCase().includes(lowerInput) ||
      lastName.toLowerCase().includes(lowerInput) ||
      email.toLowerCase().includes(lowerInput) ||
      state.toLowerCase().includes(lowerInput) ||
      town.toLowerCase().includes(lowerInput) ||
      village.toLowerCase().includes(lowerInput) ||
      gender.toLowerCase().includes(lowerInput)
    );
  };
  const allMembers =
    members?.length > 0 &&
    members?.map((member, i) => (
      <MemberComponent
        key={i}
        i={i}
        firstName={member?.firstName}
        lastName={member?.lastName}
        email={member?.email}
        number={member?.number}
        state={member?.state}
        town={member?.town}
        village={member?.village}
        gender={member?.gender}
        id={member?.id}
      />
    ));
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-2 items-center max-w-[300px] mb-8 border border-black rounded-md px-2">
          <Input
            className="!border-none !outline-none"
            value={input}
            onChange={handleInput}
            placeholder="At least 3 characters"
          />
          <Search />
        </div>
        <p className="font-bold">{member?.length} Members</p>
      </div>
      {members?.length > 0 && (
        <>
          <table className="table-auto border-spacing-2  border-collapse border border-slate-500">
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
          <div className="flex justify-center space-x-4 mt-8">
            <Button
              disabled={pagination.active === 1}
              variant="link"
              onClick={() => pagination.previous()}
              className="hover:bg-blue-500 transition"
            >
              Prev
            </Button>
            {pagination.range.map((item, i) => (
              <Button
                className={cn(
                  pagination.active === item &&
                    'bg-blue-500 hover:bg-blue-500 ',
                  'hover:bg-blue-500'
                )}
                onClick={() => pagination.setPage(item)}
                variant="link"
              >
                {i + 1}
              </Button>
            ))}
            <Button
              disabled={
                pagination.active ===
                pagination.range[pagination.range.length - 1]
              }
              variant="link"
              onClick={() => pagination.next()}
              className="hover:bg-blue-500 transition"
            >
              Next
            </Button>
          </div>
        </>
      )}
      {members?.length === 0 && (
        <h2 className="font-semibold text-center text-2xl">No Members</h2>
      )}
    </div>
  );
};

export default Filter;
