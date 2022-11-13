import React, { useState } from "react";
import { Grid, useTheme } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import {
  ChevronContainer,
  StyledForwardChevron,
  StyledBackChevron,
} from "./Carousel.style";

type Props = {
  images: string[];
};

const Carousel: React.FC<Props> = ({ images }: Props) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  let imagesToDisplay: string[][] = [];

  // we should display 5 images per view.
  for (let i = 0; i < images.length; i += 5) {
    imagesToDisplay.push(images.slice(i, i + 5));
  }

  return (
    <Grid
      container
      display="flex"
      alignItems="center"
      sx={{ mt: "20px" }}
      style={{ maxWidth: "1270px" }}
    >
      <Grid item xs={1}>
        {activeStep > 0 && (
          <ChevronContainer>
            <StyledBackChevron onClick={handleBack} />
          </ChevronContainer>
        )}
      </Grid>
      <Grid item xs={10}>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {imagesToDisplay.map((imageSet, index) => (
            <Grid container key={index} columnSpacing={4}>
              {Math.abs(activeStep - index) <= 2
                ? imageSet.map((url) => {
                    return (
                      <Grid item key={url} alignItems="center">
                        <img src={url} alt="" width="180px" height="180px" />
                      </Grid>
                    );
                  })
                : null}
            </Grid>
          ))}
        </SwipeableViews>
      </Grid>
      <Grid item xs={1}>
        {activeStep < imagesToDisplay.length - 1 && (
          <ChevronContainer>
            <StyledForwardChevron onClick={handleNext} />
          </ChevronContainer>
        )}
      </Grid>
    </Grid>
  );
};

export default Carousel;
