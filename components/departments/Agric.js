'use client';

import TitleComponent from '../mantine/TitleComponent';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useToast } from '../ui/use-toast';

const Agric = ({ params, group, memberType }) => {
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
        Agric Department
      </TitleComponent>
      <div className="md:w-[70%] sm:w-[85%] w-[95%] space-y-4  mx-auto">
        <h4 className="mt-16 font-semibold text-lg">
          We play key role in the Transformation agenda of the South East
          Nigeria through the application of cutting edge AgriTech and
          Innovations in our Sustainable Agriculture projects in our region.{' '}
        </h4>
        <p className="text-sm sm:text-base">
          Our Comprehensive road map on Agricultural Development Projects is the
          delight of every investor within and outside the country. We are
          thrilled to introduce a groundbreaking agricultural projects poised to
          revolutionize the agricultural landscape in Nigeria and Africa. Our
          vision is clear - to usher in a new era of sustainability, prosperity,
          and growth for the five states of Abia, Anambra, Ebonyi, Enugu, and
          Imo through the "South East Agricultural Renaissance Initiative."
        </p>
        <p className="text-sm sm:text-base">
          The South East Agricultural Renaissance Initiative is a comprehensive
          endeavor designed to address the region's unique challenges while
          harnessing its vast agricultural potentials. Our mission is to create
          a sustainable and vibrant agricultural ecosystem that not only ensures
          food security but also elevates the livelihoods of smallholder farmers
          and triggers Rural community Development. Use of Technology in
          Facilitating direct links with off takers, processors, distributors
          and the entire Agricultural Value Chain.
        </p>
        <p className="text-sm sm:text-base">
          Agriculture has long been the backbone of South East Nigeria's
          economy, sustaining millions of livelihoods and contributing
          significantly to the region's GDP.
        </p>
        <p className="text-sm sm:text-base">
          Despite its potential, the sector has faced numerous challenges like;
          Farm mechanization and other inputs, low productivity, limited access
          to farm modern agricultural practices and insufficient value addition.
        </p>
        <p className="text-sm sm:text-base">
          To address these issues and propel the agricultural sector towards
          sustainable growth, we present an ambitious Agricultural Programs
          aimed at transforming the agricultural landscape in the region.
        </p>
        <p className="font-semibold text-lg">Program Overview:</p>
        <p className="text-sm sm:text-base">
          Our Agricultural Programs focuses on; # Cultivation of key crops such
          as Cassava, Maize, Soybeans, Groundnuts, Sorghum, Sesame seed, Millet
          and so on.
        </p>
        <div>
          <p className="text-sm sm:text-base">
            # Grain 🌾 storage and Livestock/Aquaculture Feed production.
          </p>
          <p className="text-sm sm:text-base">
            Fish farming, from Hatchery to table size production. #Livestock
            farming.
          </p>
          <p className="text-sm sm:text-base">
            # Palm plantation and palm oil production. # Food processing and
            Packaging.
          </p>
        </div>
        <p className="font-semibold text-lg">
          Our primary goals objectives are to:
        </p>
        <p className="text-sm sm:text-base">
          * Establishment of 50 medium and large-scale Agribusiness companies in
          every states of the region by 2028. These entities will serve as hubs
          for modern agricultural practices, processing, and marketing.
        </p>
        <div className="space-y-4">
          <p className="font-semibold text-lg"> Key Objectives:</p>
          <p className="text-sm sm:text-base">
            1. Empowerment of Youth: Central to our projects are the empowerment
            of 5000 youths in the South East. These youths will receive training
            in various aspects of agriculture, including agricultural extension
            services, packaging, and marketing of agricultural produce, animal
            feed production, and input provision. By providing these skills, we
            aim to create a generation of agricultural entrepreneurs capable of
            driving innovation and productivity.
          </p>
          <p className="text-sm sm:text-base">
            2. Crop Diversification: Promoting a diverse range of crops,
            including drought-resistant varieties like sorghum and millet, not
            only enhances food security but also opens new markets and income
            streams for farmers. Our project encourages crop diversification to
            mitigate risks associated with mono-cropping.
          </p>
          <p className="text-sm sm:text-base">
            3. Fish Farming: Given the region's proximity to freshwater bodies,
            we intend to establish hatchery centers that will be releasing 2
            million fingering on monthly basis into our submersible fish cages
            in those freshwater bodies. This will not only contribute to local
            protein consumption but also offer a lucrative avenue for investment
            for our people.
          </p>
          <p className="text-sm sm:text-base">
            4. Livestock Farming: Livestock farming, including poultry,
            caw,goat, sheep, pig and ruminants like grasscutter, Rabbit will be
            intensified to meet the growing demand for meat and dairy products.
            Improved breeding practices and animal healthcare will be fully in
            place.
          </p>
          <p className="text-sm sm:text-base">
            5. Palm Plantation: The cultivation of oil palm will be expanded,
            supporting the region's contribution to the palm oil industry while
            promoting sustainable practices.
          </p>
          <p className="text-sm sm:text-base">
            6. Market Access: Building strong linkages between farmers and
            markets is crucial. We plan to establish efficient supply chains and
            processing units to reduce post-harvest losses and increase farmers'
            income.
          </p>
          <p className="text-sm sm:text-base">
            7. Research and Development: Continuous research and development
            will be a cornerstone of this project, ensuring that farmers have
            access to the latest agricultural technologies and practices.
          </p>
          <p className="text-sm sm:text-base">
            The South East Agricultural Renaissance Initiative represents a
            significant stride towards unlocking the full potential of
            agriculture in the South East. Collaborating with government
            agencies, local communities, and stakeholders, we aim to bring about
            positive and lasting change.
          </p>
          <p className="text-sm sm:text-base">
            We invite you to explore this transformative project further and
            consider collaboration opportunities with us. Together, we can
            transform the South East into a thriving hub of sustainable
            agriculture, benefiting both the local population and the nation at
            large.
          </p>
          <p className="font-semibold text-lg">Conclusions</p>
          <p className="text-sm sm:text-base !mb-6">
            This Agricultural Project holds the promise of revitalizing the
            South East region's agricultural sector. By establishing
            Agribusiness Centers, empowering youth, diversifying crops, and
            focusing on key value chains, we aim to build a sustainable, modern,
            and competitive agricultural industry that not only enhances food
            security but also contributes significantly to the economic
            development of the South East. This endeavor aligns with the broader
            national goal of transforming Nigeria into a self-reliant,
            agricultural powerhouse.
          </p>
          <Link
            href={' https://chat.whatsapp.com/FfOSemtIIBNLfmMkjJ0ObY'}
            target="_blank"
            className=" text-blue-500"
          >
            Join the agricultural whatsapp group
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Agric;
