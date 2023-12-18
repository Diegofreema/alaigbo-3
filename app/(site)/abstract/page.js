'use client';
import SemiHeader from '../../../UI/SemiHeader';

import Demo from '../../../components/mantine/Accordion';
import TextComponent from '../../../components/mantine/TextComponent';
import { Container } from '@mantine/core';

const Abstract = () => {
  return (
    <div className="min-h-screen md:py-[80px] py-[60px]">
      <SemiHeader>ABSTRACT</SemiHeader>
      <Container className=" space-y-32  mx-auto px-4">
        <Demo />

        <div className="mt-16 space-y-8">
          <TextComponent
            text={`We sincerely welcome your philanthropic and strategic partnership
            towards the economic, social, and political development of Alaigbo.
            Together, let us shape a brighter future and create lasting impact.
            Join us today and be a catalyst for change.`}
            fs={'lg'}
            fw={600}
          />
          <TextComponent
            text={`  Invest in Alaigbo Youth Forum and seize the boundless possibilities
            that lie ahead.`}
            fs={'lg'}
            fw={600}
          />

          <TextComponent text="Sincerely, AYF Team" />

          <TextComponent fw={700} text={'OUR MOTTO: Maka Oganiru Ndigbo'} />
        </div>
      </Container>
    </div>
  );
};

export default Abstract;
