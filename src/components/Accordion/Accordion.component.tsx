import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { StyledMuiAccordion } from "./Accordion.style";

type Props = {
  title: string;
  description: React.ReactElement;
};

const Accordion: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <StyledMuiAccordion>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
    </StyledMuiAccordion>
  );
};

export default Accordion;
