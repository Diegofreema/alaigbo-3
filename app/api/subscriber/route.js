import axios from 'axios';
import { NextResponse } from 'next/server';

const AUDIENCE_ID = process.env.MAILCHIP_AUDIENCE_ID;
const API_KEY = process.env.MAILCHIP_API_KEY;
export async function POST(request) {
  const { email } = await request.json();

  if (!email) new NextResponse('Unauthorized');

  try {
    const response = await axios.post(
      `https://us17.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        auth: {
          username: 'apikey',
          password: API_KEY,
        },
      }
    );

    if (response.status === 200) {
      return new NextResponse('Successfully subscribed to newsletter');
    }
  } catch (error) {
    return new NextResponse('Failed to subscribe to newsletter', {
      status: 500,
    });
  }
}
