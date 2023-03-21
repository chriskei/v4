import { charToRects } from './chars';

const PIXELS_PER_CHAR_WIDTH = 9;
const PIXELS_PER_CHAR_HEIGHT = 17;
const BLACK = '#000000';
const SHADOW = '#ECAB0F';

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
  // Keep count of base positions since we work in smaller rectangles
  let baseTop = 0;
  let baseLeft = pixelMultiplier;

  // Accumulator
  const divs = [];

  // Iterate over each character in each preformatted line
  const lines = preformat(text, pixelMultiplier, parentWidth);
  for (const line of lines) {
    for (const char of line) {
      const rects = charToRects[char];

      // Iterate over each rectangle in the array
      for (const [ row, col, width, height, hasShadow ] of rects) {
        // Use pixelMultiplier to account for other pixel scales
        const divTop = baseTop + (row * pixelMultiplier);
        const divLeft = baseLeft + (col * pixelMultiplier);
        const divWidth = width * pixelMultiplier;
        const divHeight = height * pixelMultiplier;

        divs.push({
          left: divLeft,
          top: divTop,
          width: divWidth,
          height: divHeight,
          'background-color': BLACK,
          'z-index': 2
        });

        if (hasShadow) {
          divs.push({
            left: divLeft - (pixelMultiplier),
            top: divTop + pixelMultiplier,
            width: divWidth,
            height: divHeight,
            'background-color': SHADOW,
            'z-index': 1
          });
        }
      }

      // After each character, move baseLeft over
      baseLeft += PIXELS_PER_CHAR_WIDTH * pixelMultiplier;
    }

    // After each line, move baseTop down and reset baseLeft
    baseTop += PIXELS_PER_CHAR_HEIGHT * pixelMultiplier;
    baseLeft = pixelMultiplier;
  }

  return divs;
}
