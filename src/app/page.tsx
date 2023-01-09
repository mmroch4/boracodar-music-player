'use client';

import { HowlOptions } from 'howler';
import { TbPlayerPause, TbPlayerPlay, TbPlayerSkipBack, TbPlayerSkipForward } from 'react-icons/tb';
import { useAudioPlayer } from 'react-use-audio-player';

export default function Home() {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: 'outra-vida.mp3',
    format: 'mp3',
    autoplay: false,
  } satisfies HowlOptions);

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <div>
      <div>
        <h2>Outra vida</h2>

        <p>Armandinho</p>

        <TbPlayerSkipBack />
        <span onClick={togglePlayPause}>{playing ? <TbPlayerPause /> : <TbPlayerPlay />}</span>
        <TbPlayerSkipForward />
      </div>
    </div>
  );
}
