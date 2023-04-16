export function generateHiddenTransform() {
  const locationRandom = Math.random();
  const translateRandom = Math.random();
  const translateRandomRounded = Math.round(translateRandom * 100);

  if (locationRandom < 0.25) {
    return `translate(-100vw, ${translateRandomRounded}vh)`;
  }

  if (locationRandom < 0.5) {
    return `translate(200vw, ${translateRandomRounded}vh)`;
  }

  if (locationRandom < 0.75) {
    return `translate(${translateRandomRounded}vw, -100vh)`;
  }

  return `translate(${translateRandomRounded}vw, 200vh)`;
}
