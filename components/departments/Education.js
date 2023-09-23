'use client';

import { useRouter } from 'next/navigation';
import { useToast } from '../ui/use-toast';
import { useEffect, useState } from 'react';
import TitleComponent from '../mantine/TitleComponent';
import Link from 'next/link';

const Education = ({ params, group, memberType }) => {
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
    <div className="min-h-screen items-center justify-center">
      <div className="w-[90%] mx-auto min-h-screen items-center justify-center py-[110px]">
        <TitleComponent ta={'center'} fw={500}>
          Education Department
        </TitleComponent>
        <div className="md:w-[70%] sm:w-[85%] w-[95%] space-y-4  mx-auto">
          <h4 className="mt-16 font-semibold text-lg">
            OUR VISION IS TO EMPOWER EVERYONE TO FULFILL THEIR FULL POTENTIAL AS
            EMPOWERED INDIVIDUALS, CONSTRUCTIVE MEMBERS OF THEIR COMMUNITIES,
            PRODUCTIVE PARTICIPANTS IN THE ECONOMY AND ENGAGED CITIZENS OF THE
            SOUTH-EASTERN NIGERIA (ALAIGBO) THROUGH OUR INNOVATIVE EDUCATIONAL
            PROJECTS.{' '}
          </h4>
          <p className="text-sm sm:text-base">
            Education as we know, is both a basic human right and the most
            important element for community development. Therefore, a collective
            human effort, enhanced by strong educational system is central to
            the attainment of AYF’s vision for ALAIGBO. The aim of this vision
            towards education is to ensure that all indigenes of school age,
            irrespective of gender, or disability in Alaigbo, attain
            basic(proper) education and also to improve the standard of
            education in Alaigbo. Our mision reviews the concept of education,
            qualitative education and sustainable development. Our vision
            counters the problems contributing to the decline in qualitative
            education in Alaigbo and also the need for an upgraded standard in
            our education system.
          </p>
          <p className="text-sm sm:text-base">
            The Vision is significant, very reasonable and thought-provoking. it
            suggests some measures among others that can be adopted in order to
            ensure qualitative education for sustainable development such as:
          </p>
          <ul className="text-sm sm:text-base list-disc list-inside">
            <li>Updated curriculum,</li>
            <li>Improve Technology Usage</li>
            <li>Teacher Training.</li>
            <li>Cultural Activities</li>
            <li>Sports Activities</li>
            <li>Healthy School Competitions</li>
            <li>Skill Acquisition etc</li>
          </ul>

          <p className="text-sm sm:text-base">
            These projects will be rigorously followed and implemented as they
            tend to be the bedrock of an extraordinary educational atmosphere in
            Alaigbo
          </p>
          <p className="text-sm !mb-8 sm:text-base">
            Let’s join hands together to build the Alaibo of our dreams (as a
            citadel of intelligence), where our extraordinary and talented
            scholars are raised, nurtured and showcased to the world.
          </p>

          <Link
            href={'https://chat.whatsapp.com/Ew5XUqxrItmK2SNUiyGciO'}
            target="_blank"
            className=" text-blue-500"
          >
            Join the Education whatsapp group
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
