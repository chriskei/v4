import { charToPixels } from './pixels';
import { exampleWorkTexts } from './words';

export function fnTempName(exampleWorkTextIndex) {
  let baseX = 0;
  let baseY = 0;

  const res = [];
  const exampleWorkText = exampleWorkTexts[exampleWorkTextIndex];

  for (const char of exampleWorkText) {
    const arrOfArr = charToPixels[char];
    let y = baseY;

    for (const arr of arrOfArr) {
      let x = baseX;
      for (const binary of arr) {
        if (binary) {
          res.push({
            left: x,
            top: y,
            color: binary === 1 ? 'black' : '#ECAB0F',
          });
        }

        x += 1;
      }

      y += 1;
    }

    baseX += 9;
    baseY = 0;
  }

  return res;
}
