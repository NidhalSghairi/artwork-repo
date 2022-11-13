import { Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Wrapper } from "./App.style";
import { ArtworkDataType } from "./App.types";
import Accordion from "./components/Accordion/Accordion.component";
import ArtWorkMainImage from "./components/ArtWorkMainImage/ArtWorkMainImage.component";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ShoppingSection from "./components/ShoppingSection/ShoppingSection";
import ReactSlickDemo from "./components/Carousel/Carousel.component";

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

  const getSecondAccordionDetails = () => {
    return (
      <List>
        <ListItem disablePadding>
          <Grid container>
            <Grid item xs={3}>
              <ListItemText primary="SUBJECT" />
            </Grid>
            <Grid item xs={9}>
              <ListItemText primary={data.subjects.join(", ")} />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem disablePadding>
          <Grid container>
            <Grid item xs={3}>
              <ListItemText primary="STYLE" />
            </Grid>
            <Grid item xs={9}>
              <ListItemText primary={data.styles.join(", ")} />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem disablePadding>
          <Grid container>
            <Grid item xs={3}>
              <ListItemText primary="MEDIUM" />
            </Grid>
            <Grid item xs={9}>
              <ListItemText primary={data.mediums.join(", ")} />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem disablePadding>
          <Grid container>
            <Grid item xs={3}>
              <ListItemText primary="MATERIALS" />
            </Grid>
            <Grid item xs={9}>
              <ListItemText primary={data.materials.join(", ")} />
            </Grid>
          </Grid>
        </ListItem>
      </List>
    );
  };

  return (
    <Wrapper container rowSpacing={2}>
      <Grid xs={12} item container columnSpacing={4}>
        <Grid xs={8} item container rowSpacing={2}>
          <ArtWorkMainImage imageUrl={data.imageUrl} />
          <Grid item xs={12}>
            <Accordion
              title="DESCRIPTION"
              description={<Typography>{data.description}</Typography>}
            />
          </Grid>
          <Grid item xs={12}>
            <Accordion
              title="SUBJECT, MEDIUM, STYLE, MATERIALS"
              description={getSecondAccordionDetails()}
            />
          </Grid>
        </Grid>
        <Grid xs={4} item container>
          <ShoppingSection data={data} />
        </Grid>
      </Grid>
      <Grid xs={12} item container>
        <ReactSlickDemo images={data.otherArtworkImages} />
      </Grid>
    </Wrapper>
  );
}

export default App;
