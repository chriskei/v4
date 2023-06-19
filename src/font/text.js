import { charToRects } from './chars';
import {
  PIXELS_PER_CHAR_WIDTH, PIXELS_PER_CHAR_HEIGHT, BLACK
} from '../utils/const';

function preformat(text, pixelMultiplier, parentWidth) {
  // Determine how many characters can fit per line
  const charWidth = pixelMultiplier * PIXELS_PER_CHAR_WIDTH;
  const maxCharsPerLine = (parentWidth - pixelMultiplier) / charWidth;

  // Accumulators
  const lines = [];
  let line = '';

  // Iterate over all words to determine which line they should go in
  const words = text.split(' ');
  for (const word of words) {
    const lineLength = line.length;
    const wordLength = word.length;

    if (lineLength + wordLength > maxCharsPerLine) {
      lines.push(line);
      line = word + ' ';
    } else {
      line += word + ' ';
    }
  }

  // Add the last line to the lines and return
  lines.push(line);
  return lines;
}

export function getDivs(text, pixelMultiplier, parentWidth) {
  // Accumulator
  const baseDivs = [];

  // Keep count of base positions since we work in smaller rectangles
  let baseTop = 0;
  let baseLeft = pixelMultiplier;

  // Iterate over each character in each preformatted line
  const lines = preformat(text, pixelMultiplier, parentWidth);
  const divsHeight = lines.length * PIXELS_PER_CHAR_HEIGHT * pixelMultiplier;
  for (const line of lines) {
    for (const char of line) {
      if (char === '|') {
        // Use | to short circuit a new line
        baseTop += PIXELS_PER_CHAR_HEIGHT * pixelMultiplier;
        baseLeft = pixelMultiplier;
      } else {
        const rects = charToRects[char];
        const charDivs = [];

        // Iterate over each rectangle in the array
        for (const [ row, col, width, height ] of rects) {
        // Use pixelMultiplier to account for other pixel scales
          const divTop = row * pixelMultiplier;
          const divLeft = col * pixelMultiplier;
          const divWidth = width * pixelMultiplier;
          const divHeight = height * pixelMultiplier;

          // Generic div info
          charDivs.push({
            left: divLeft,
            top: divTop,
            width: divWidth,
            height: divHeight,
            'background-color': BLACK,
            'z-index': 2
          });
        }

        // Save baseDiv info before moving baseLeft
        const baseDiv = {
          baseTop,
          baseLeft,
          charDivs
        };
        baseDivs.push(baseDiv);

        // After each character, move baseLeft over
        baseLeft += PIXELS_PER_CHAR_WIDTH * pixelMultiplier;
      }
    }

    // After each line, move baseTop down and reset baseLeft
    baseTop += PIXELS_PER_CHAR_HEIGHT * pixelMultiplier;
    baseLeft = pixelMultiplier;
  }

  return {
    divsHeight,
    baseDivs
  };
}
