/**
 * @type {HTMLAudioElement}
 */
let lastAudio;

/**
 *
 * @param {HTMLAudioElement} sound
 */
export const playSound = async (sound) => {
  try {
    //* pause any audio playing
    if (lastAudio && sound !== lastAudio) {
      lastAudio.pause();
      lastAudio.currentTime = 0;
    }

    sound.currentTime = 0;
    await sound.play();

    lastAudio = sound;
  } catch (error) {
    console.error(error);
  }
};
