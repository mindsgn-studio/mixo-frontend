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
  address: string | null;
  setAddress: (address: string) => void;
  connected: boolean;
  setConnected: (connected: boolean) => void;
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
  current: null,
  address: null,
  connected: false,
  setAddress: (address: string) => {},
  setConnected: (connected: boolean) => {}
});

export const useAudio = () => React.useContext(AudioContext);

export const AudioProvider = ({ children }: { children: any }) => {
  const [current, setCurrent] = useState<CurrentInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [audio, setAudio] = useState<any | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState([]);
  const [connected, setConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string | null>(null);

  const logStream = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/song/stream/${
        current && current.uuid
      }/${address}`,
      {
        method: 'POST'
      }
    );
    console.log(response);
  };
  q;
  const stopMusic = () => {
    if (current && audio) {
      audio.stop();
      setIsPlaying(false);
    }
  };

  const pauseMusic = () => {
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

  const loadMusic = (
    path: string,
    artist: string,
    title: string,
    background: string,
    uuid: string
  ) => {
    if (isPlaying) {
      stopMusic();
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
      audio.stop();
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
        current,
        address,
        connected,
        setAddress,
        setConnected
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
