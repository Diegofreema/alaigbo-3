import * as z from 'zod';

export const userValidation = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be at least 3 words' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name must be at least 3 words' }),
  middleName: z.string().optional(),

  email: z.string().min(3, { message: 'Email must be a valid email' }).email(),
  number: z
    .string()
    .min(5, { message: 'Phone number should be at least 5 digits' }),

  state: z.string().min(3, { message: 'State must be at least 3 words' }),
  lga: z.string().min(3, { message: 'LGA must be at least 3 words' }),
  town: z.string().min(3, { message: 'Town must be at least 3 words' }),
  placeOfBirth: z
    .string()
    .min(3, { message: 'Place of birth must be at least 3 words' }),
  village: z
    .string()
    .min(3, { message: 'Village name must be at least 3 words' }),
  familyName: z
    .string()
    .min(3, { message: 'Family name must be at least 3 words' }),
  gender: z.string().min(4, { message: 'Gender must be at least 4 words' }),

  interests: z
    .string()
    .min(3, { message: 'Interests must be at least 3 words' }),
  bio: z
    .string()
    .min(3, { message: 'Bio must be at least 3 words' })
    .max(1000, { message: 'Bio must be less than 100 words' })
    .optional(),
  imgUrl: z.string().min(3, { message: 'Image url is required' }).nonempty(),

  group: z.string().min(3, { message: 'Group is required' }),
});

export const investorValidation = z.object({
  companyName: z.string().min(3, { message: 'Company name is required' }),
  number: z
    .string()
    .min(11, { message: 'Phone number should be 11 digits' })
    .max(11, { message: 'Phone number should be 11 digits' }),
  representativeName: z
    .string()
    .min(3, { message: 'Representative name is required' }),
  email: z.string().min(3, { message: 'Email is required' }).email(),
  industry: z.string().min(3, { message: 'Industry is required' }).min(3),
  investmentPreference: z
    .string()
    .min(3, { message: 'Investment preference is required' })
    .optional(),
  investmentExperience: z.string().min(3).optional(),
  accreditation: z.string().min(3, { message: 'Accreditation is required' }),
});

export const bookingValidation = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name should be at least 3 words' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name should be at least 3 words' }),
  middleName: z
    .string()
    .min(3, { message: 'Middle name should be at least 3 words' }),
  email: z.string().min(3, { message: 'Email should be valid' }).email(),
  number: z
    .string()
    .min(11, { message: 'Phone number should be 11 digits' })
    .max(11, { message: 'Phone number should be 11 digits' }),
  location: z.string().optional(),
  accommodation: z.string().min(2, { message: 'An answer is required' }),
  participants: z
    .string()
    .min(3, { message: 'An answer is required' })
    .optional(),
  guest: z.string().min(2, { message: 'An answer is required' }),
  prefix: z.string().min(2, { message: 'Prefix is required' }),
  reason: z.string().optional(),
  update: z.string().min(3, { message: 'Update is required' }),
});
