import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const ChevronContainer = styled.div`
  cursor: pointer;
`;

export const StyledForwardChevron = styled(ArrowForwardIosIcon)`
  && {
    font-size: 80px;
    color: #666666;
  }
`;

export const StyledBackChevron = styled(ArrowBackIosNewIcon)`
  && {
    font-size: 80px;
    color: #666666;
  }
`;
