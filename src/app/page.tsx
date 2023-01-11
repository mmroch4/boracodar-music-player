'use client';

import { HowlOptions } from 'howler';
import { useAudioPlayer, useAudioPosition } from 'react-use-audio-player';
import { host } from '../config/host';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { songs } from '../songs';
import styles from './page.module.scss';
import { Player } from './Player';

export default function Home() {
  const [songIndex, setSongIndex] = useLocalStorage<number>('index', 0);
  const [songVolume, setSongVolume] = useLocalStorage<number>('volume', 1);

  const currentSong = songs[songIndex];

  const { togglePlayPause, ready, loading, playing, load, volume, play } = useAudioPlayer({
    src: `${host}/${currentSong.file}`,
    format: 'mp3',
    preload: 'metadata',
    autoplay: false,
    volume: songVolume,
    onend: () => setSongIndex(songIndex === songs.length - 1 ? 0 : songIndex + 1),
  } satisfies HowlOptions);

  const { seek, duration, position } = useAudioPosition({
    highRefreshRate: true,
  });

  const previousTrack = (): void => {
    if (position > 3) {
      seek(0);

      return;
    }

    if (songIndex === 0) {
      setSongIndex(songs.length - 1);
    } else {
      setSongIndex(songIndex - 1);
    }

    load({
      src: songs[songIndex].file,
    });
  };

  const nextTrack = (): void => {
    if (songIndex === songs.length - 1) {
      setSongIndex(0);
    } else {
      setSongIndex(songIndex + 1);
    }

    load({
      src: songs[songIndex].file,
    });
  };

  const changeVolume = (value: number): void => {
    if (value > 1 || value < 0) {
      return;
    }

    setSongVolume(value);
    volume(value);
  };

  return (
    <main className={styles.main}>
      <Player
        song={currentSong}
        loading={loading}
        ready={ready}
        playing={playing}
        duration={duration}
        position={position}
        volume={songVolume}
        previousTrack={previousTrack}
        nextTrack={nextTrack}
        togglePlayPause={togglePlayPause}
        changeVolume={changeVolume}
      />
    </main>
  );
}
