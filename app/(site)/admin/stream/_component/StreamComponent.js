'use client';
import React, { useRef, useEffect, useState } from 'react';
import {
  useHMSStore,
  useHMSActions,
  useHMSNotifications,
  selectIsConnectedToRoom,
  useVideo,
  selectPeers,
} from '@100mslive/react-sdk';
import { useUser } from '@clerk/nextjs';
import { Button } from '../../../../../components/ui/button';
import Room from './Room';
import getToken from '../../../../../service';

const ENDPOINT = process.env.REACT_APP_TOKEN_ENDPOINT;
const ROOM_ID = process.env.REACT_ROOM_ID;
const id = `${Date.now()}`;
const StreamComponent = ({ stream }) => {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = React.useState('');
  console.log('tokenState', token);
  const { user } = useUser();
  // const hmsStore = useHMSStore();
  const hmsActions = useHMSActions();
  const hmsNotifications = useHMSNotifications();
  const config = {
    userName: user?.fullName,
    authToken: token, // client-side token generated from your token service
    settings: {
      // initial states
      isAudioMuted: true,
      isVideoMuted: false,
    },
    metaData: JSON.stringify({ city: 'Owerri', knowledge: 'nothing' }),
    rememberDeviceSelection: true, // remember manual device change
    captureNetworkQualityInPreview: false, // whether to measure network score in preview
  };
  // const handleSubmit = async () => {
  //   try {
  //     const token = await getToken('broadcaster');
  //     setToken(token);
  //     console.log(token);
  //     await hmsActions.preview(config);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   // console.log(token);
  //   // await hmsActions.join(config);
  // };

  async function onJoinClick() {
    setLoading(true);
    try {
      const token = await getToken('broadcaster');

      await hmsActions.join({
        userName: user?.fullName,
        authToken: token, // client-side token generated from your token service
        settings: {
          // initial states
          isAudioMuted: true,
          isVideoMuted: false,
        },
        metaData: JSON.stringify({ city: 'Owerri', knowledge: 'nothing' }),
        rememberDeviceSelection: true, // remember manual device change
        captureNetworkQualityInPreview: false, // whether to measure network score in preview
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="">
      {!isConnected && (
        <Button disabled={loading} onClick={onJoinClick}>
          Create stream
        </Button>
      )}
      <Room />
    </div>
  );
};

export default StreamComponent;
