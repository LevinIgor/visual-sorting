// The browser will limit the number of concurrent audio contexts
// So be sure to re-use them whenever you can
const myAudioContext = new AudioContext();

/**
 * Helper function to emit a beep sound in the browser using the Web Audio API.
 *
 * @param {number} duration - The duration of the beep sound in milliseconds.
 * @param {number} frequency - The frequency of the beep sound.
 * @param {number} volume - The volume of the beep sound.
 *
 * @returns {Promise} - A promise that resolves when the beep sound is finished.
 */
function beep(duration, frequency, volume) {
  return new Promise((resolve, reject) => {
    duration = duration || 200;
    frequency = frequency || 440;
    volume = volume || 100;

    try {
      const oscillatorNode = myAudioContext.createOscillator();
      const gainNode = myAudioContext.createGain();
      oscillatorNode.connect(gainNode);

      oscillatorNode.frequency.value = frequency;

      oscillatorNode.type = "triangle";
      gainNode.connect(myAudioContext.destination);

      gainNode.gain.value = volume * 0.01;

      gainNode.gain.exponentialRampToValueAtTime(
        1,
        myAudioContext.currentTime + 10
      );
      oscillatorNode.start(myAudioContext.currentTime);
      oscillatorNode.stop(myAudioContext.currentTime + duration * 0.001);

      oscillatorNode.onended = () => {
        resolve();
      };
    } catch (error) {
      reject(error);
    }
  });
}

export default beep;
