import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  description: React.ReactElement;
};

const Accordion: React.FC<Props> = ({ title, description }: Props) => {
  return (
    <MuiAccordion>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{description}</AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
