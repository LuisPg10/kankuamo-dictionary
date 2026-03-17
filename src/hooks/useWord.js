import { useContext } from 'react';
import { AudioContext } from '../context/AudioContext';

/**
 *
 * @param {string} kankuamoSound
 * @param {string} englishSound
 */
export const useWord = (kankuamoSound, englishSound) => {
  const { playSound } = useContext(AudioContext);

  const playKankuamoSound = () => playSound(kankuamoSound);
  const playEnglishSound = () => playSound(englishSound);

  return {
    //* Methods
    playEnglishSound,
    playKankuamoSound,
  };
};
