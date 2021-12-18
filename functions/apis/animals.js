async function GetAnimalImage(Animal) {
  let Animals = [
      "dog",
      "cat",
      "duck",
      "bird",
      "panda",
      "wolf",
      "fox",
      "seal",
      "llama",
      "alpaca",
      "camel",
      "lizard",
    ],
    res,
    json,
    Data;

  if (!Animal) {
    Animals = Animals[Math.floor(Math.random() * Animals.length)];
    (res = await Fetch(
      `https://apis.duncte123.me/animal/${Animals.toLowerCase()}`,
      {
        headers: {
          "user-agent":
            "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; PalmSource/hspr-H102; Blazer/4.0) 16;320x320",
        },
      }
    )),
      (json = await res.json());

    if (!json.data.file)
      throw new Error(`Something Went Wrong, Try Again Later!`);

    Data = json.data.file;

    return Data;
  } else {
    if (!Animals.find((Ani) => Ani === Animal.toLowerCase()))
      throw new Error(
        `Invalid Animal Provided - ${Animals.map(
          (Ani) => Ani.charAt(0).toUpperCase() + Ani.slice(1)
        ).join(", ")}`
      );
    (res = await Fetch(
      `https://apis.duncte123.me/animal/${Animal.toLowerCase()}`,
      {
        headers: {
          "user-agent":
            "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; PalmSource/hspr-H102; Blazer/4.0) 16;320x320",
        },
      }
    )),
      (json = await res.json());

    if (!json.data.file)
      throw new Error(`Something Went Wrong, Try Again Later!`);

    Data = json.data.file;
    return Data;
  }
}

module.exports = { GetAnimalImage };
