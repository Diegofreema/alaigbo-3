import * as z from 'zod';

export const userValidation = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be at least 3 characters' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name must be at least 3 characters' }),
  middleName: z
    .string()
    .min(3, { message: 'Middle name must be at least 3 characters' }),
  email: z.string().min(3, { message: 'Email must be a valid email' }).email(),
  number: z
    .string()
    .min(11, { message: 'Phone number should be 11 digits' })
    .max(11, { message: 'Phone number should be 11 digits' }),
  state: z.string().min(3, { message: 'State must be at least 3 characters' }),
  lga: z.string().min(3, { message: 'LGA must be at least 3 characters' }),
  town: z.string().min(3, { message: 'Town must be at least 3 characters' }),
  placeOfBirth: z
    .string()
    .min(3, { message: 'Place of birth must be at least 3 characters' }),
  village: z
    .string()
    .min(3, { message: 'Village name must be at least 3 characters' }),
  familyName: z
    .string()
    .min(3, { message: 'Family name must be at least 3 characters' }),
  gender: z
    .string()
    .min(4, { message: 'Gender must be at least 4 characters' }),

  interests: z
    .string()
    .min(3, { message: 'Interests must be at least 3 characters' }),
  bio: z
    .string()
    .min(3, { message: 'Bio must be at least 3 characters' })
    .max(100, { message: 'Bio must be less than 100 characters' })
    .optional(),
  imgUrl: z.string().min(3, { message: 'Image url is required' }).nonempty(),

  memberId: z.string({ message: 'Member id is required' }),
});

export const investorValidation = z.object({
  companyName: z.string({ message: 'Company name is required' }).min(3),
  number: z.string({ message: 'Phone number is required' }).min(11).max(11),
  representativeName: z
    .string({ message: 'Representative name is required' })
    .min(3),
  email: z.string({ message: 'Email is required' }).min(3).email(),
  industry: z.string({ message: 'Industry is required' }).min(3),
  investmentPreference: z
    .string({ message: 'Investment preference is required' })
    .min(3)
    .optional(),
  investmentExperience: z
    .string({ message: 'Investment experience is required' })
    .min(3)
    .optional(),
  accreditation: z.string({ message: 'Accreditation is required' }).min(3),
});

export const bookingValidation = z.object({
  firstName: z.string({ message: 'First name is required' }).min(3),
  lastName: z.string({ message: 'Last name is required' }).min(3),
  middleName: z.string({ message: 'Middle name is required' }).min(3),
  email: z.string({ message: 'Email is required' }).min(3).email(),
  number: z.string({ message: 'Phone number is required' }).min(11).max(11),
  location: z.string({ message: 'Location is required' }).min(3).optional(),
  accommodation: z.string({ message: 'Accommodation is required' }).min(2),
  participants: z
    .string({ message: 'Participant is required' })
    .min(3)
    .optional(),
  guest: z.string({ message: 'Guest is required' }).min(2),
  prefix: z.string({ message: 'Prefix is required' }).min(2),
  reason: z.string({ message: 'Reason is required' }).min(3).optional(),
  update: z.string({ message: 'Update is required' }).min(3),
});
