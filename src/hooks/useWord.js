import { useRef } from 'react';

export const useWord = (kankuamoSound, englishSound) => {
  const kankuamoSoundRef = useRef(null);

  const playKankuamoSound = async () => {
    if (!kankuamoSound) return;

    const sound = kankuamoSoundRef.current;

    try {
      sound.currentTime = 0;
      await sound.play();
    } catch {
      return;
    }
  };

  return {
    //* Props
    kankuamoSoundRef,

    //* Methods
    playKankuamoSound,
  };
};
