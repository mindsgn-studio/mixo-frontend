import React, { useState, useEffect } from 'react';

interface CurrentInterface {
  path: string | null;
  artist: string | null;
  title: string | null;
  background: string | null;
  uuid: string | null;
}

interface AudioInterface {
  isPlaying: boolean;
  stopMusic: () => void;
  playMusic: () => void;
  pauseMusic: () => void;
  loadMusic: (
    path: string,
    artist: string,
    title: string,
    background: string,
    uuid: string
  ) => void;
  playlist: any[];
  current: CurrentInterface | null;
}

export const AudioContext = React.createContext<AudioInterface>({
  isPlaying: false,
  playlist: [],
  stopMusic: () => {},
  pauseMusic: () => {},
  playMusic: () => {},
  loadMusic: (
    path: string,
    artist: string,
    title: string,
    background: string,
    uuid: string
  ) => {},
  current: null
});

export const useAudio = () => React.useContext(AudioContext);

export const AudioProvider = ({ children }: { children: any }) => {
  const [current, setCurrent] = useState<CurrentInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [audio, setAudio] = useState<any>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState([]);

  const logStream = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/song/stream/${
        current && current.uuid
      }/hduwe78y7y473t6346t43r5r35`,
      {
        method: 'POST'
      }
    );
    console.log(response);
  };

  //stop music
  const stopMusic = async () => {
    if (current && audio) {
      logStream();
      audio.stop();
      setIsPlaying(false);
    }
  };

  const pauseMusic = async () => {
    if (current && audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const playMusic = () => {
    if (current) {
      audio.play();
      setIsPlaying(true);
    }
  };

  //load music
  const loadMusic = async (
    path: string,
    artist: string,
    title: string,
    background: string,
    uuid: string
  ) => {
    if (isPlaying) {
      await stopMusic();
    }
    //@ts-ignore
    const newAudio: HTMLAudioElement = document.getElementById('myAudio');

    const current: CurrentInterface = {
      path,
      artist,
      title,
      background,
      uuid
    };

    if (current && audio) {
      audio.pause();
      setIsPlaying(false);
    }

    newAudio.src = path;

    newAudio.play();
    setAudio(newAudio);
    setCurrent(current);
    setIsPlaying(true);
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        stopMusic,
        playMusic,
        loadMusic,
        pauseMusic,
        playlist,
        current
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
