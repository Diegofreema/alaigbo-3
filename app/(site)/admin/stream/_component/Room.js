'use client';
import { useEffect } from 'react';
import Stream from './Stream';
import ChatNdParticipants from './ChatNdParticipants';
import Controls from './Controls';

function Room() {
  return (
    <div className="">
      <div className="">
        <Stream />
        <Controls />
      </div>
      {/* <ChatNdParticipants /> */}
    </div>
  );
}

export default Room;
