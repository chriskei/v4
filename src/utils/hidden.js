const hiddenTransforms = (() => {
  const arr = [];

  for (let i = -100; i <= 100; i += 5) {
    arr.push(`translate(-150vw, ${i}vh)`);
    arr.push(`translate(250vw, ${i}vh)`);
    arr.push(`translate(${i}vw, -150vh)`);
    arr.push(`translate(${i}vw, 250vh)`);
  }

  return arr;
})();

export function getHiddenTransform(idx) {
  return hiddenTransforms[idx % hiddenTransforms.length];
}
