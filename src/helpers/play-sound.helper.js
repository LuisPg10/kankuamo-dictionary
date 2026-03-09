export const playSound = async (sound) => {
  try {
    sound.currentTime = 0;
    await sound.play();
  } catch {
    return;
  }
};
