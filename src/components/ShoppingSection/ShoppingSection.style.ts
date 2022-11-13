import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 80%;
`;

export const StyledTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const FullNameAndCountryContainer = styled.div`
  display: flex;
  padding: 8px 0px;
`;

export const StyledFullName = styled.div`
  color: #edc398;
  padding-right: 16px;
  font-weight: bold;
  font-size: 18px;
`;

export const StyledCountry = styled.div`
  color: #bdbdbd;
  font-weight: bold;
  font-size: 18px;
`;

export const StyledPrice = styled.div`
  font-weight: bold;
  font-size: 24px;
  padding: 24px 0;
`;

export const StyledAcquireButton = styled.button`
  color: #ffffff;
  background-color: #000000;
  padding: 8px 0px;
  border-radius: 100px;
  font-size: 18px;
  width: 100%;
  cursor: pointer;
`;

export const StyledMakeAnOfferButton = styled(StyledAcquireButton)`
  color: #000000;
  background-color: #ffffff;
  margin: 16px 0;
`;

export const IconTextContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const DeliveryFeeText = styled.div`
  font-weight: 600;
  margin-top: 8px;
  font-size: 18px;
`;

export const StyledInput = styled.input``;

export const InputsContainer = styled.div`
  display: flex;
  margin-top: 8px;
`;

export const StyledIconText = styled.div`
  margin-left: 8px;
  display: flex;
`;

export const FreePickupPlaceText = styled.div`
  font-weight: bold;
  margin-left: 4px;
`;
