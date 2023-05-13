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
    height: pixelMultiplier,
    'background-color': BLACK,
    'z-index': 2
  });
  divs.push({
    left: -pixelMultiplier,
    top: pixelMultiplier,
    width: parentWidth,
    height: pixelMultiplier,
    'background-color': GOLD,
    'z-index': 1
  });

  // Right of outline
  divs.push({
    left: parentWidth,
    top: 0,
    width: pixelMultiplier,
    height: height + 16,
    'background-color': BLACK,
    'z-index': 2
  });
  divs.push({
    left: parentWidth - pixelMultiplier,
    top: pixelMultiplier,
    width: pixelMultiplier,
    height: height + 16,
    'background-color': GOLD,
    'z-index': 1
  });

  // Bottom of outline
  divs.push({
    left: 0,
    top: height + 16,
    width: parentWidth + 2,
    height: pixelMultiplier,
    'background-color': BLACK,
    'z-index': 2
  });
  divs.push({
    left: 0 - pixelMultiplier,
    top: height + 16 + pixelMultiplier,
    width: parentWidth + 2,
    height: pixelMultiplier,
    'background-color': GOLD,
    'z-index': 1
  });

  // Left of outline
  divs.push({
    left: 0,
    top: 0,
    width: pixelMultiplier,
    height: height + 16,
    'background-color': BLACK,
    'z-index': 2
  });
  divs.push({
    left: -pixelMultiplier,
    top: pixelMultiplier,
    width: pixelMultiplier,
    height: height + 16,
    'background-color': GOLD,
    'z-index': 1
  });

  return divs;
}
