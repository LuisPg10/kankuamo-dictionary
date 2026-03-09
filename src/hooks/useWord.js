import { useRef } from 'react';
import { playSound } from '../helpers/play-sound.helper';

export const useWord = (kankuamoSound, englishSound) => {
  const kankuamoSoundRef = useRef(null);
  const englishSoundRef = useRef(null);

  const playKankuamoSound = async () => {
    if (!kankuamoSound) return;

    const sound = kankuamoSoundRef.current;
    playSound(sound);
  };

  const playEnglishSound = async () => {
    if (!englishSound) return;

    const sound = englishSoundRef.current;
    playSound(sound);
  };

  return {
    //* Props
    englishSoundRef,
    kankuamoSoundRef,

    //* Methods
    playEnglishSound,
    playKankuamoSound,
  };
};
