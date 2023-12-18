import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Image from 'next/image';
import TextComponent from './mantine/TextComponent';

const IdentityCard = async ({
  memberId,
  imgUrl,
  lastName,
  firstName,
  middleName,
  state,
  lga,
  village,
  town,
  placeOfBirth,
  memberType,
}) => {
  let prefix = '';
  const generatePrefix = () => {
    if (state === 'Imo State') {
      prefix = 'IM';
    } else if (state === 'Anambra State') {
      prefix = 'AN';
    } else if (state === 'Ebonyi State') {
      prefix = 'EB';
    } else if (state === 'Enugu State') {
      prefix = 'EN';
    } else if (state === 'Abia State') {
      prefix = 'AB';
    }
    return prefix;
  };

  return (
    <div>
      <Card className="  bg-[#F4A273] rounded-md">
        <CardHeader>
          <CardTitle className="text-center">ALAIGBO YOUTH FORUM</CardTitle>
        </CardHeader>
        <CardContent className="w-full">
          <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 place-items-center  space-x-3 space-y-3 w-full ">
            <div className="w-[200px] h-[200px] rounded-full  relative overflow-hidden">
              <Image
                alt="profile-image"
                src={imgUrl}
                fill
                priority
                className="object-cover"
                quality={100}
              />
            </div>
            <div className=" ">
              <div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1 capitalized">
                    <span className="text-xs">Surname</span>
                    <TextComponent fz={'md'} text={lastName} fw={'bold'} />
                  </div>
                  <div>
                    <div className="space-y-1">
                      <span className="text-xs">Other names</span>
                      <div className="capitalized">
                        <TextComponent
                          fz={'md'}
                          text={`${firstName} ${middleName}  `}
                          fw={'bold'}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-1">
                  <div className="capitalized">
                    <span className="text-xs whitespace-nowrap">
                      State of origin
                    </span>
                    <TextComponent fz={'md'} text={state} fw={'bold'} />
                  </div>
                  <div className="capitalized">
                    <span className="text-xs">LGA</span>
                    <TextComponent fz={'md'} text={lga} fw={'bold'} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="capitalized">
                    <span className="text-xs whitespace-nowrap">Town</span>
                    <TextComponent fz={'sm'} text={town} fw={'bold'} />
                  </div>
                  <div className="">
                    <span className="text-xs inline-block">Village</span>
                    <TextComponent fz={'sm'} text={village} fw={'bold'} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="capitalized">
                    <span className="text-xs whitespace-nowrap">
                      Place of birth
                    </span>
                    <TextComponent fz={'sm'} text={placeOfBirth} fw={'bold'} />
                  </div>
                  <div className="">
                    <span className="text-xs inline-block">Member</span>
                    <TextComponent fz={'sm'} text={memberType} fw={'bold'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardContent className="w-full">
          <div className="text-center">
            <p className="text-black uppercase">{`UIN: AYF/${generatePrefix()}/${memberId}`}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IdentityCard;
