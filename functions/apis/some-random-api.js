async function Gay(Image) {
  if (!Image) throw new Error(`No Image (Format: png)`);

  const image = encodeURI(Image);

  const Data = `https://some-random-api.ml/canvas/gay?avatar=${image}`;
  return Data;
}
