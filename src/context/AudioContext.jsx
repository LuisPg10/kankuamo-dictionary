import { createContext, useRef } from 'react';

export const AudioContext = createContext(null);

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const playSound = async (src) => {
    if (!src) return;

    try {
      const audio = audioRef.current;
      audio.pause();
      audio.src = src;
      audio.currentTime = 0;
      await audio.play();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AudioContext.Provider value={{ playSound }}>
      {children}
    </AudioContext.Provider>
  );
};
