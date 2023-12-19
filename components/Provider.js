'use client';
import AuthProvider from '../lib/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import { HMSRoomProvider } from '@100mslive/react-sdk';
const Provider = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <HMSRoomProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>{children}</SessionProvider>
        </QueryClientProvider>
      </AuthProvider>
    </HMSRoomProvider>
  );
};

export default Provider;
