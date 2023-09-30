'use client';
import React, { useEffect, useState } from 'react';
import TitleComponent from '../mantine/TitleComponent';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';

const Legal = ({ params, group, memberType }) => {
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
  return (
    <div className="w-[90%] mx-auto min-h-screen items-center justify-center py-[110px]">
      <TitleComponent ta={'center'} fw={500}>
        Legal Department
      </TitleComponent>
      <div className="md:w-[70%] sm:w-[85%] w-[95%] space-y-4  mx-auto">
        <h4 className="mt-16 font-semibold text-lg ">
          The Legal Team being the heart of the AYF diligently endeavors that
          accountable and responsible decisions are reached by well legally
          informed designated individuals.
        </h4>
        <p className="text-sm sm:text-base">
          The legal Team diligently endeavors to properly guide AYF in
          compliance with all relevant statutes and regulations.
        </p>
        <p className="text-sm sm:text-base">
          The Legal Team consists of lawyers, legal experts and academicians.
        </p>
        <p className="text-sm sm:text-base">
          The legal team is responsible for providing legal guidance and
          support, ensuring compliance with applicable laws and regulations.
          Some of the core responsibilities of the AYF Legal Team includes but
          not limited to:
        </p>
        <p className="text-sm sm:text-base">
          -Providing legal advice and support: The legal department is
          responsible for providing legal advice and support including
          identifying legal risks and recommending strategies to mitigate those
          risks.
        </p>
        <p className="text-sm sm:text-base">
          -Drafting and reviewing contracts: The legal team is responsible for
          drafting and reviewing contracts and other legal documents, to ensure
          that they are legally sound and protect AYF interests.
        </p>

        <p className="text-sm sm:text-base">
          -Ensuring compliance with laws and regulations: The legal team is
          responsible for ensuring that AYF complies with applicable laws and
          regulations.
        </p>
        <div>
          <p className="text-sm sm:text-base">
            -Managing legal disputes: The legal team is responsible for managing
            any legal disputes that AUF may face, including litigation,
            arbitration, and mediation.
          </p>
          <p className="text-sm sm:text-base">
            -Managing corporate governance: The legal team is responsible for
            managing the AYF corporate governance, including ensuring compliance
            with legal and regulatory requirements, managing board meetings, and
            maintaining corporate records.
          </p>
        </div>

        <p className="text-sm sm:text-base !mb-6">
          -Providing training and education: The legal team is responsible for
          providing training and education on legal issues and risks, including
          compliance training for employees and managers.
        </p>
        <Link
          href={' https://chat.whatsapp.com/IX0BLK5ZC9Q6Fuv4cHdQN7'}
          target="_blank"
          className=" text-blue-500"
        >
          Join the legal team's whatsapp group
        </Link>
      </div>
    </div>
  );
};

export default Legal;
