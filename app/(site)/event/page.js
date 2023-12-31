'use client';

import Button from '../../../UI/Button';
import Business from '../../../components/Business';
import EventNotification from '../../../components/Events/EventNotification';
import EventTimer from '../../../components/Events/EventTimer';
import Speakers from '../../../components/Events/Speakers';
import TextComponent from '../../../components/mantine/TextComponent';
import TitleComponent from '../../../components/mantine/TitleComponent';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '../../../components/ui/card';

const Event = () => {
  return (
    <div className=" overflow-x-hidden relative">
      <EventNotification />

      <EventTimer />
      <Business />
      <Speakers />
      <div className="h-screen bg-[#131313] relative flex justify-center items-center">
        <TitleComponent
          order={2}
          ta={'center'}
          color="#DE5000"
          className="absolute top-8"
        >
          UPCOMING EVENT
        </TitleComponent>
        <div className="grid grid-cols-1 mt-10 md:mt-0 gap-8 md:w-[70%] w-[90%] sm:grid-cols-2">
          <Card className="bg-[#DE5000] p-4 rounded-md border-none">
            <CardHeader className="bg-[#EE0000] p-4 text-white text-center rounded-sm ">
              {' '}
              ALAIGBO
            </CardHeader>
            <CardContent className="mt-4 -mb-4">
              <TitleComponent ta={'center'} order={3} w={100}>
                YOUTH SUBMIT
              </TitleComponent>
              <TextComponent
                text="Deciding the Economic and Political Future of Alaigbo"
                ta={'center'}
                fw={'bold'}
                mb={15}
                color="white"
                fs={20}
              />
            </CardContent>
            <CardFooter className="text-center flex flex-col items-center justify-center">
              <TextComponent
                fz={15}
                fw={'bold'}
                mb={10}
                color={''}
                text={'  December 2023'}
              />
              <div className="flex items-center justify-center space-x-4">
                <Button
                  href="https://summit.flashticketpro.com/"
                  title={'Book Your Seat'}
                />

                <Button
                  href="https://youtube.com/@AlaigboYouthForum?si=J811JNewifJvwg5z"
                  title={'Stream Event'}
                />
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-[#DE5000] p-4 rounded-md border-none">
            <CardContent className="flex items-center justify-center h-full">
              <TitleComponent order={2} ta={'center'}>
                COMING SOON
              </TitleComponent>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Event;
