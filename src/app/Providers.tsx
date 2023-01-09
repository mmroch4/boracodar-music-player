'use client';

import { AudioPlayerProvider } from 'react-use-audio-player';

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return <AudioPlayerProvider>{children}</AudioPlayerProvider>;
}
