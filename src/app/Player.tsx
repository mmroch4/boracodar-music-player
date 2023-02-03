'use client';

import Image from 'next/image';
import {
  MdPause,
  MdPlayArrow,
  MdSkipNext,
  MdSkipPrevious,
  MdVolumeDown,
  MdVolumeOff,
  MdVolumeUp,
} from 'react-icons/md';
import { host } from '../config/host';
import { ISong } from '../types/ISong';
import { formatSeconds } from '../utils/formatSeconds';
import styles from './Player.module.scss';

interface Props {
  song: ISong;
  volume: number;
  position: number;
  duration: number;
  playing: boolean;
  loading: boolean;
  ready: boolean;
  changeVolume: (value: number) => void;
  previousTrack: () => void;
  nextTrack: () => void;
  togglePlayPause: () => void;
  seek: (position: number) => number;
}

export function Player({
  song,
  volume,
  duration,
  playing,
  position,
  ready,
  loading,
  changeVolume,
  nextTrack,
  previousTrack,
  togglePlayPause,
  seek,
}: Props) {
  if (loading || !ready) {
    return (
      <div className={styles.player}>
        <div className={styles.placeholder}></div>

        <h2 className={styles.blur}></h2>

        <p className={styles.blur}></p>

        <div className={`${styles.controls} ${styles.blur}`}>
          <div></div>

          <button>
            <MdSkipPrevious />
          </button>

          <button>
            <MdPlayArrow />
          </button>

          <button>
            <MdSkipNext />
          </button>
        </div>

        <div className={styles.timer_slider_blur}></div>

        <div className={styles.timer}>
          <small className={styles.blur}></small>

          <small className={styles.blur}></small>
        </div>

        <div className={`${styles.sound_panel} ${styles.blur}`}>
          <MdVolumeUp />

          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.player}>
      <div className={styles.placeholder}>
        <Image
          src={`${host}/${song.image}`}
          alt={song.name}
          width={150}
          height={150}
          className={styles.image}
          priority
        />
      </div>

      <h2>{song.name}</h2>

      <p>{song.author}</p>

      <div className={styles.controls}>
        {loading || !ready ? <div></div> : ''}

        <button onClick={previousTrack}>
          <MdSkipPrevious />
        </button>

        <button onClick={togglePlayPause}>{playing ? <MdPause /> : <MdPlayArrow />}</button>

        <button onClick={nextTrack}>
          <MdSkipNext />
        </button>
      </div>

      <input
        type="range"
        max={duration}
        value={position}
        onChange={(e) => {
          seek(Number(e.target.value));
        }}
        className={styles.timer_slider}
      />

      <div className={styles.timer}>
        <small>{formatSeconds(position)}</small>

        <small>{formatSeconds(duration)}</small>
      </div>

      <div className={styles.sound_panel}>
        {volume === 0 ? <MdVolumeOff /> : volume > 0.3 ? <MdVolumeUp /> : <MdVolumeDown />}

        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => {
            changeVolume(Number(e.target.value));
          }}
        />
      </div>
    </div>
  );
}
