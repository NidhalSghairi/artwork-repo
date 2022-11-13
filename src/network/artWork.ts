import axios from "axios";

export const getArtWorkData = async (artworkId: string) => {
  return await axios
    .get(
      `https://storage.googleapis.com/ya-misc/interviews/front/examples/${artworkId}.json`
    )
    .then((response) => response.data);
};
