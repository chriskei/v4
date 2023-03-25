export const generateHiddenTransform = () => {
  const random1 = Math.random();
  const random2 = Math.random();
  const random2Rounded = Math.round(random2 * 100);

  if (random1 < 0.25) {
    return `translate(-50vw, ${random2Rounded}vh)`;
  }

  if (random1 < 0.5) {
    return `translate(150vw, ${random2Rounded}vh)`;
  }

  if (random1 < 0.75) {
    return `translate(${random2Rounded}vw, -50vh)`;
  }

  return `translate(${random2Rounded}vw, 150vh)`;
};
