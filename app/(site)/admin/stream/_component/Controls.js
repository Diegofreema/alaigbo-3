'use client';
import {
  Ban,
  CameraOff,
  LogOutIcon,
  Mic,
  MicOff,
  Podcast,
  Video,
  VideoOff,
} from 'lucide-react';
import { Button } from '../../../../../components/ui/button';
import {
  selectHLSState,
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectLocalPeer,
  selectIsConnectedToRoom,
} from '@100mslive/react-sdk';
import { useToast } from '../../../../../components/ui/use-toast';
import { useState } from 'react';
function Controls() {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const [loading, setLoading] = useState(false);
  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const localPeer = useHMSStore(selectLocalPeer);
  const hlsState = useHMSStore(selectHLSState);
  const { toast } = useToast();
  const startHLSStreaming = async () => {
    setLoading(true);
    try {
      await hmsActions?.startHLSStreaming();
    } catch (err) {
      alert(`failed to start hls ${err}`);
    } finally {
      setLoading(false);
    }
  };
  const switchCamera = async () => {
    try {
      await hmsActions.switchCamera();
    } catch (err) {
      alert(`failed to switch camera ${err}`);
    }
  };
  const stopHLSStreaming = async () => {
    setLoading(true);
    try {
      await hmsActions?.stopHLSStreaming();
      toast({
        title: 'You ended the live Streaming Stopped',

        variant: 'success',
      });
    } catch (err) {
      alert(`failed to stop hls ${err}`);
    } finally {
      setLoading(false);
    }
  };
  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!audioEnabled);
  };

  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!videoEnabled);
  };
  const leaveRoom = async () => {
    if (localPeer?.roleName === 'broadcaster') {
      hmsActions.leave();
      await hmsActions?.stopHLSStreaming();
      toast({
        title: 'You ended the live Streaming Stopped',

        variant: 'success',
      });
    } else {
      hmsActions?.leave();
      toast({
        title: 'You left the live Stream',

        variant: 'success',
      });
    }
  };
  return (
    <div className=" flex items-center flex-col space-y-4 sm:!flex-row rounded-md justify-center space-x-3 py-4 px-5">
      {localPeer?.roleName === 'broadcaster' && (
        <div className="flex flex-col sm:!flex-row sm:space-y-0 sm:space-x-3 space-x-0 space-y-4 mt-5 items-center justify-center">
          <div className="flex space-x-3 items-center ">
            <Button onClick={toggleAudio}>
              {audioEnabled ? <Mic /> : <MicOff />}
            </Button>

            <Button onClick={toggleVideo}>
              {videoEnabled ? <Video /> : <VideoOff />}
            </Button>
          </div>

          {hlsState.running ? (
            <Button
              disabled={loading}
              variant="secondary"
              className="leave"
              onClick={stopHLSStreaming}
            >
              <Ban /> Stop Streaming
            </Button>
          ) : (
            <Button
              disabled={loading}
              variant="secondary"
              disableElevation
              onClick={startHLSStreaming}
            >
              <Podcast /> Go Live
            </Button>
          )}
        </div>
      )}

      {isConnected && (
        <div className="flex items-center justify-center flex-col sm:!flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <Button onClick={leaveRoom} variant="destructive" className="leave">
            <LogOutIcon /> Leave Room
          </Button>

          <Button onClick={switchCamera}>Switch Camera</Button>
        </div>
      )}

      {/* HLS stream button */}
    </div>
  );
}

export default Controls;
