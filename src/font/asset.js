import {
  BLACK, GOLD
} from '../utils/const';

// TODO: fix magic numbers in this file
export function getAssetDivs(height, pixelMultiplier, parentWidth) {
  // Accumulator
  const divs = [];

  if (height === 0) {
    return divs;
  }

  // Top of outline
  divs.push({
    left: 0,
    top: 0,
    width: parentWidth,
    height: pixelMultiplier * 2,
    'background-color': BLACK,
    'z-index': 2
  });
  divs.push({
    left: -(pixelMultiplier * 2),
    top: pixelMultiplier * 2,
    width: parentWidth,
    height: pixelMultiplier * 2,
    'background-color': GOLD,
    'z-index': 1
  });

  // Right of outline
  divs.push({
    left: parentWidth,
    top: 0,
    width: pixelMultiplier * 2,
    height: height + 16,
    'background-color': BLACK,
    'z-index': 2
  });
  divs.push({
    left: parentWidth - (pixelMultiplier * 2),
    top: pixelMultiplier * 2,
    width: pixelMultiplier * 2,
    height: height + 16,
    'background-color': GOLD,
    'z-index': 1
  });

  // Bottom of outline
  divs.push({
    left: 0,
    top: height + 16,
    width: parentWidth + 2,
    height: pixelMultiplier * 2,
    'background-color': BLACK,
    'z-index': 2
  });
  divs.push({
    left: 0 - (pixelMultiplier * 2),
    top: height + 16 + (pixelMultiplier * 2),
    width: parentWidth + 2,
    height: pixelMultiplier * 2,
    'background-color': GOLD,
    'z-index': 1
  });

  // Left of outline
  divs.push({
    left: 0,
    top: 0,
    width: pixelMultiplier * 2,
    height: height + 16,
    'background-color': BLACK,
    'z-index': 2
  });
  divs.push({
    left: -(pixelMultiplier * 2),
    top: pixelMultiplier * 2,
    width: pixelMultiplier * 2,
    height: height + 16,
    'background-color': GOLD,
    'z-index': 1
  });

  return divs;
}
