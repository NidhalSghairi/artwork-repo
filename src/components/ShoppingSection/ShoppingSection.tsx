import { Typography } from "@mui/material";
import React from "react";
import { ArtworkDataType } from "../../App.types";
import {
  StyledTitle,
  StyledFullName,
  FullNameAndCountryContainer,
  StyledCountry,
  StyledPrice,
  StyledAcquireButton,
  StyledMakeAnOfferButton,
  SectionWrapper,
  IconTextContainer,
  DeliveryFeeText,
  StyledInput,
  InputsContainer,
  StyledIconText,
  FreePickupPlaceText,
} from "./ShoppingSection.style";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CheckIcon from "@mui/icons-material/Check";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LocationOnIcon from "@mui/icons-material/LocationOn";

type Props = {
  data: ArtworkDataType;
};
const ShoppingSection: React.FC<Props> = ({ data }) => {
  return (
    <SectionWrapper>
      <StyledTitle>{data.title}</StyledTitle>
      <FullNameAndCountryContainer>
        <StyledFullName>{data.artistShort.fullname}</StyledFullName>
        <StyledCountry>{data.artistShort.country}</StyledCountry>
      </FullNameAndCountryContainer>
      <Typography variant={"subtitle1"}>
        {data.category}, {data.creationYear}
      </Typography>
      <Typography variant={"subtitle1"}>
        {data.dimensions.width} W x {data.dimensions.height} H x{" "}
        {data.dimensions.depth} D in
      </Typography>
      <StyledPrice>{data.price} €</StyledPrice>
      <StyledAcquireButton>Acquire</StyledAcquireButton>
      <StyledMakeAnOfferButton>Make an offer</StyledMakeAnOfferButton>
      <IconTextContainer>
        <HourglassTopIcon />
        <StyledIconText>PRE-RESERVE FOR 24 HOURS</StyledIconText>
      </IconTextContainer>
      <IconTextContainer>
        <CheckIcon />
        <StyledIconText>131€ estimated delivery fee for France</StyledIconText>
      </IconTextContainer>
      <DeliveryFeeText>
        In order to obtain an occurate delivery fee, please enter your country
        of residence and zip code:
      </DeliveryFeeText>
      <InputsContainer>
        <StyledInput
          type="text"
          name="country"
          placeholder="Spain"
        ></StyledInput>
        <StyledInput
          type="text"
          name="zipCode"
          placeholder="81932"
        ></StyledInput>
      </InputsContainer>
      <IconTextContainer>
        <LocalShippingIcon />
        <StyledIconText>Delivery fee is 129 €</StyledIconText>
      </IconTextContainer>

      <IconTextContainer style={{ marginTop: "16px" }}>
        <LocationOnIcon />
        <StyledIconText>
          Free pickup in
          <FreePickupPlaceText>Bruxelles, Belgium</FreePickupPlaceText>
        </StyledIconText>
      </IconTextContainer>
      <IconTextContainer>
        <CheckIcon />
        <StyledIconText>Try 14 days at home for free</StyledIconText>
      </IconTextContainer>
    </SectionWrapper>
  );
};

export default ShoppingSection;
