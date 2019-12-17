import delay from '../../functions/delay';
import createDiv from '../ExampleTwo/ExampleTwo';

export const light = async (delayTime, currentSetLight) => {
    delay(delayTime)
    .then(() => createDiv(currentSetLight));
};

// export const second = async(delayTime) => {
//     delay(delayTime)
// };

// export const third = async(delayTime) => {
//     delay(delayTime)
// };

// export const forth = async (delayTime) => {
//     delay(delayTime)
// };

// export const fifth =async (delayTime) => {
//     delay(delayTime)
// };