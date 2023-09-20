'use client';
import React, { useEffect, useState } from 'react';
import TitleComponent from '../mantine/TitleComponent';
import Link from 'next/link';
import { useToast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Tourism = ({ params, group, memberType }) => {
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
        TOURISM DEPARTMENT
      </TitleComponent>
      <div className="md:w-[70%] sm:w-[85%] w-[95%] space-y-4  mx-auto">
        <h4 className="mt-16 font-semibold text-lg">
          Motto: Building a safe space for sustainable tourism to thrive in
          Alaigbo{' '}
        </h4>
        <div>
          <p className="font-semibold text-lg">1. TEAM LEADERSHIP</p>
          <p className="text-sm sm:text-base">
            Mr. Paul Onyeke: Team Leader Mr.
          </p>
          <p className="text-sm sm:text-base">
            Ikechukwu Emmanuel: Team Secretary Mr.
          </p>
          <p className="text-sm sm:text-base">
            Ebubechukwu Belonwu: Team Clerk
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">2. TEAM AMBASSADOR</p>
          <p className="text-sm sm:text-base">
            Miss Ebere Joy, the 11th Miss Tourism Nigeria
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">3. TEAM COMPONENT</p>
          <p className="text-sm sm:text-base">
            Our team comprises of people who are vastly educated and have the
            required knowledge, expertise and experience to help us drive our
            goals. The team comprises of tourism experts and enthusiasts,
            financial experts, web designers, counselors, and high documentary
            photographers.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">4. ABOUT THE TOURISM INDUSTRY</p>
          <p className="text-sm sm:text-base">
            The tourism Industry, simply put, is an industry that not only cuts
            across but encompasses various activities such as traveling,
            hoteling, hospitality, etc. These activities give pleasure, leisure
            and satisfaction to their recipients (tourists). There are several
            aspects of tourism such as medical tourism (championed by Turkey),
            technology tourism (championed by China, Korea and Asia), etc. Other
            places prominent for tourism are Dubai, Cyprus and Maldives.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">5. OUR TARGET/VISION</p>
          <p className="text-sm sm:text-base">
            We aim to have at least 12 ACTIVE touristic sites in each state of
            the South East within the next 2 years. That would give us a total
            of at least 60 ACTIVE touristic sites in Alaigbo within the next 2
            years.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6. OUR ROADMAP/MISSION</p>
          <p className="text-sm sm:text-base">
            We divided our targets into short term, midterm, long term, and
            Biannual goals.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6a. SHORT TERM GOALS</p>
          <p className="text-sm sm:text-base">
            We aim to revive at least 3 already existed sites in each SE state
            (total of 15). Achieving these goals is not expected to be cost
            effective. We already started by selecting 3 sites from each state
            and this comprises more of beaches, waterfalls, lakes, and caves. We
            require cooperation of the entire house to pull this through. We
            tend to achieve this by:
          </p>
          <p>a. Engaging the locals and LGAs where these sites are located.</p>
          <p>
            b. As AYF, organize and coordinate the locals to make these sites
            safe and secured for the use of visitors.
          </p>
          <p className="text-sm sm:text-base">
            c. As AYF, market these facilities and host events that would
            showcase them.
          </p>
          <p className="text-sm sm:text-base">
            The places selected (will be mentioned here) and the relevant
            contacts will be submitted to the leadership of the AYF with whom we
            shall work earnestly for their realization.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6b. MIDTERM GOALS</p>
          <p className="text-sm sm:text-base">
            In like manner, this would include selecting 3 already existing
            sites from each state of the SE and giving them life again. This too
            is not expected to be too cost effective.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6c. LONG TERM GOALS</p>
          <p className="text-sm sm:text-base">
            Having well managed the short and midterm goals, we aim attract
            local investors and the government to build at least 3 new touristic
            sites in each state of the SE. Such sites would include zoos,
            rebranding our local museums, building parks, etc.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6d. BI-ANNUAL GOALS</p>
          <p className="text-sm sm:text-base">
            These goals are expected to be achieved in 2 years. We aim that we
            would be able to attract both local and foreign investors, private
            and public sectors and the government to invest in this. The
            facilities targeted here are building of tropical villages, local
            hotels, places of memorials, etc.
          </p>
        </div>
        <div className="!mb-6">
          <p className="font-semibold text-lg">7. EVENTS AND FESTIVALS</p>
          <p className="text-sm sm:text-base">
            Promoting Traditional events, festivals and occasions across
            Alaigbo. And creating a calendar of events.
          </p>
        </div>

        <Link
          href={'  https://chat.whatsapp.com/KIj4zy79VMF0e7blaz0Bcs'}
          target="_blank"
          className=" text-blue-500"
        >
          Join the tourism whatsapp group
        </Link>
      </div>
    </div>
  );
};

export default Tourism;
