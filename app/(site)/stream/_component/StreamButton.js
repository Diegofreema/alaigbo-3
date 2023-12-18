'use client';
import React from 'react';
import { Button } from '../../../../components/ui/button';
import { useStream } from '../../../../hooks/stream';

const StreamButton = () => {
  const { onOpen } = useStream();
  return <Button onClick={onOpen}>Add stream link</Button>;
};

export default StreamButton;
