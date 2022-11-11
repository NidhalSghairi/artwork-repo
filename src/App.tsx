import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./App.style";
import { ArtworkDataType } from "./App.types";
import ArtWorkMainImage from "./components/ArtWorkMainImage/ArtWorkMainImage.component";

function App() {
  const { artworkId } = useParams();
  const [data, setData] = useState<ArtworkDataType | null>(null);

  useEffect(() => {
    axios
      .get(
        `https://storage.googleapis.com/ya-misc/interviews/front/examples/${artworkId}.json`
      )
      .then((response) => setData(response.data));
  }, [artworkId]);

  if (!data) {
    return <h1>Loader</h1>;
  }

  return (
    <Wrapper container>
      <Grid xs={12} item container>
        <Grid xs={6} item container>
          <ArtWorkMainImage imageUrl={data.imageUrl} />
          <Grid item xs={12}></Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Grid xs={6} item container></Grid>
      </Grid>
      <Grid xs={12} item container>
        Caroussel component
      </Grid>
    </Wrapper>
  );
}

export default App;
