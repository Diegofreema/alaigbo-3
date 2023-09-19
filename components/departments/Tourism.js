import React from 'react';

const Tourism = () => {
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
          <p>Mr. Paul Onyeke: Team Leader Mr.</p>
          <p>Ikechukwu Emmanuel: Team Secretary Mr.</p>
          <p>Ebubechukwu Belonwu: Team Clerk</p>
        </div>
        <div>
          <p className="font-semibold text-lg">2. TEAM AMBASSADOR</p>
          <p>Miss Ebere Joy, the 11th Miss Tourism Nigeria</p>
        </div>
        <div>
          <p className="font-semibold text-lg">3. TEAM COMPONENT</p>
          <p>
            Our team comprises of people who are vastly educated and have the
            required knowledge, expertise and experience to help us drive our
            goals. The team comprises of tourism experts and enthusiasts,
            financial experts, web designers, counselors, and high documentary
            photographers.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">4. ABOUT THE TOURISM INDUSTRY</p>
          <p>
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
          <p>
            We aim to have at least 12 ACTIVE touristic sites in each state of
            the South East within the next 2 years. That would give us a total
            of at least 60 ACTIVE touristic sites in Alaigbo within the next 2
            years.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6. OUR ROADMAP/MISSION</p>
          <p>
            We divided our targets into short term, midterm, long term, and
            Biannual goals.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6a. SHORT TERM GOALS</p>
          <p>
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
          <p>
            c. As AYF, market these facilities and host events that would
            showcase them.
          </p>
          <p>
            The places selected (will be mentioned here) and the relevant
            contacts will be submitted to the leadership of the AYF with whom we
            shall work earnestly for their realization.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6b. MIDTERM GOALS</p>
          <p>
            In like manner, this would include selecting 3 already existing
            sites from each state of the SE and giving them life again. This too
            is not expected to be too cost effective.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6c. LONG TERM GOALS</p>
          <p>
            Having well managed the short and midterm goals, we aim attract
            local investors and the government to build at least 3 new touristic
            sites in each state of the SE. Such sites would include zoos,
            rebranding our local museums, building parks, etc.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">6d. BI-ANNUAL GOALS</p>
          <p>
            These goals are expected to be achieved in 2 years. We aim that we
            would be able to attract both local and foreign investors, private
            and public sectors and the government to invest in this. The
            facilities targeted here are building of tropical villages, local
            hotels, places of memorials, etc.
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg">7. EVENTS AND FESTIVALS</p>
          <p>
            Promoting Traditional events, festivals and occasions across
            Alaigbo. And creating a calendar of events.
          </p>
        </div>

        <Link
          href={' https://chat.whatsapp.com/IX0BLK5ZC9Q6Fuv4cHdQN7'}
          target="_blank"
          className=" text-blue-500"
        >
          Join the agricultural whatsapp group
        </Link>
      </div>
    </div>
  );
};

export default Tourism;
