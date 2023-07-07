import React, { useState } from "react";
import Pizzicato from "pizzicato";

interface CurrentInterface {
  path: string | null;
  artist: string | null;
  title: string | null;
  background: string | null;
  uuid: string | null;
}

interface AudioInterface {
  audio: any;
  isPlaying: boolean;
  stopMusic: () => void;
  playMusic: () => void;
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
  audio: null,
  isPlaying: false,
  playlist: [],
  stopMusic: () => {},
  playMusic: () => {},
  loadMusic: (
    path: string,
    artist: string,
    title: string,
    background: string,
    uuid: string
  ) => {},
  current: null,
});

export const useAudio = () => React.useContext(AudioContext);

export const AudioProvider = ({ children }: { children: any }) => {
  const [current, setCurrent] = useState<CurrentInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [audio, setAudio] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playlist, setPlaylist] = useState([]);

  //stop music
  const stopMusic = () => {
    if (current) {
      audio.stop();
    }
    setIsPlaying(false);
  };

  const playMusic = () => {
    if (current && audio) {
      // setIsPlaying(true);
      // audio.play();
    }
  };

  //load music
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
    const current: CurrentInterface = {
      path,
      artist,
      title,
      background,
      uuid,
    };

    setCurrent(current);
    //@ts-ignore
    // const sound = new Pizzicato.Sound(path);
    // sound.play();
  };

  return (
    <AudioContext.Provider
      value={{
        audio,
        isPlaying,
        stopMusic,
        playMusic,
        loadMusic,
        playlist,
        current,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
