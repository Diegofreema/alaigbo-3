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
import { Button } from '../../../../components/ui/button';
import {
  selectHLSState,
  useHMSActions,
  useHMSStore,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectLocalPeer,
  selectIsConnectedToRoom,
} from '@100mslive/react-sdk';
import { useToast } from '../../../../components/ui/use-toast';
function Controls() {
  const hmsActions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);

  const audioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const videoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const localPeer = useHMSStore(selectLocalPeer);
  const hlsState = useHMSStore(selectHLSState);
  const { toast } = useToast();
  const startHLSStreaming = async () => {
    try {
      await hmsActions?.startHLSStreaming();
    } catch (err) {
      alert(`failed to start hls ${err}`);
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
    try {
      await hmsActions?.stopHLSStreaming();
    } catch (err) {
      alert(`failed to stop hls ${err}`);
    }
  };
  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!audioEnabled);
  };

  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!videoEnabled);
  };
  const leaveRoom = async () => {
    hmsActions?.leave();
    toast({
      title: 'You left the live Stream',
      variant: 'success',
    });
  };
  return (
    <div className="controls flex items-center flex-col space-y-4 md:flex-row rounded-md justify-center space-x-3 py-4 px-5 bg-orange-500">
      {localPeer?.roleName === 'broadcaster' && (
        <div className="flex flex-col space-y-4 items-center justify-center">
          <div className="flex space-x-3">
            <Button onClick={toggleAudio}>
              {audioEnabled ? <Mic /> : <MicOff />}
            </Button>

            <Button onClick={toggleVideo}>
              {videoEnabled ? <Video /> : <VideoOff />}
            </Button>
          </div>

          {hlsState.running ? (
            <Button
              variant="secondary"
              className="leave"
              onClick={stopHLSStreaming}
            >
              <Ban /> Stop Streaming
            </Button>
          ) : (
            <Button
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
        <div className="flex items-center space-x-3">
          <Button onClick={leaveRoom} variant="destructive" className="leave">
            <LogOutIcon /> Leave Stream
          </Button>
        </div>
      )}

      {/* HLS stream button */}
    </div>
  );
}

export default Controls;
