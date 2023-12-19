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

  return (
    <div className={'w-[90%] mx-auto'}>
      <video
        ref={videoRef}
        className="!aspect-video !max-h-[400px]"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
}

export default VideoTile;
