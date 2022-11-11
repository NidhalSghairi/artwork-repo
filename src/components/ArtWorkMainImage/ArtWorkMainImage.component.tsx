import React from "react";
import { Grid } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { StyledArtworkImage } from "./ArtWorkMainImage.style";

type Props = {
  imageUrl: string;
};
const ArtWorkMainImage: React.FC<Props> = ({ imageUrl }: Props) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <div>
          <StyledArtworkImage src={imageUrl} />
        </div>
      </Grid>
      <Grid
        item
        container
        xs={12}
        display="flex"
        justifyContent="center"
        columnSpacing={4}
      >
        <Grid item display="flex" alignItems="center">
          <RemoveRedEyeIcon style={{ marginRight: "8px" }} /> view in a room
        </Grid>
        <Grid item display="flex" alignItems="center">
          <ViewInArIcon style={{ marginRight: "8px" }} /> AR view
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ArtWorkMainImage;
