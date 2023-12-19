'use client';
import { useVideo } from '@100mslive/react-sdk';

function VideoTile({ peer, peers }) {
  const { videoRef } = useVideo({
    trackId: peer.videoTrack,
  });
  const numberOfBroadCasters = () => {
    const broadcasters = peers?.filter((peer) => {
      return peer?.roleName === 'broadcaster';
    });
    return broadcasters.length;
  };

  return <video ref={videoRef} className=" video" autoPlay playsInline />;
}

export default VideoTile;
