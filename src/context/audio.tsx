import React from "react";
import Pizzicato from "pizzicato";

interface AudioInterface {
  audio: any;
  isPlaying: boolean;
  stopMusic: any;
}

export const AudioContext = React.createContext<AudioInterface>({
  audio: null,
  isPlaying: false,
  stopMusic: () => {},
});

export const useAudio = () => React.useContext(AudioContext);

export const AudioProvider = ({ children }: { children: any }) => {
  const [audio, setAudio] = React.useState<any>();
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  // const { setLoading } = useLoading();

  //stop music
  const stopMusic = () => {
    audio.pause();
    setIsPlaying(false);
  };

  //load music
  const loadSound = (path: string) => {
    // setAudio();
  };

  React.useEffect(() => {
    audio;
  }, [audio]);

  return (
    <AudioContext.Provider
      value={{
        audio,
        isPlaying,
        stopMusic,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
