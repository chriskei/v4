import { charToPixels } from './pixels';

const PIXELS_PER_CHAR_WIDTH = 9;
const PIXELS_PER_CHAR_HEIGHT = 17;

function preformat(text, pixelMultiplier, viewportWidth) {
  // Determine how many characters can fit per line
  const charWidth = pixelMultiplier * PIXELS_PER_CHAR_WIDTH;
  const maxCharsPerLine = viewportWidth / charWidth;

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

export function getDivPositions(text, pixelMultiplier, viewportWidth) {
  // Keep count of base positions since we work in smaller rectangles
  let baseTop = 0;
  let baseLeft = 0;

  // Accumulator
  const divPositions = [];

  // Iterate over each character in each preformatted line
  const lines = preformat(text, pixelMultiplier, viewportWidth);
  for (const line of lines) {
    for (const char of line) {
      let top = baseTop;
      let left = baseLeft;
      const pixels = charToPixels[char];

      // Iterate over each pixel in the 2D pixels array
      for (const pixelRow of pixels) {
        for (const pixel of pixelRow) {
          if (pixel) {
            divPositions.push({
              left,
              top,
              color: pixel === 1 ? '#000000' : '#ECAB0F',
            });
          }

          // After each pixel, move left over
          left += pixelMultiplier;
        }

        // After each pixel row, move top down and reset left
        top += pixelMultiplier;
        left = baseLeft;
      }

      // After each character, move baseLeft over
      baseLeft += PIXELS_PER_CHAR_WIDTH;
    }

    // After each line, move baseTop down and reset baseLeft
    baseTop += PIXELS_PER_CHAR_HEIGHT;
    baseLeft = 0;
  }

  console.log('done');
  return divPositions;
}
