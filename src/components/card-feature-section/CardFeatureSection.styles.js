import styled, { css } from "styled-components";
import { StyledCard } from "../card/Card.styles";

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  line-height: 1.5;
  text-align: center;
  margin-bottom: 80px;
  font-size: 0.9rem;
  max-width: 600px;
  @media (min-width: 1440px) {
    font-size: 1.4rem;
  }
`;

export const StyledH1 = styled.h1`
  margin: 0;
  ${({ theme }) => css`
    color: ${theme.colors.grayishBlue};
    font-weight: ${theme.fontWeight.regular};
  `}
`;

export const SecondH1 = styled(StyledH1)`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.veryDarkBlue};
    font-weight: ${theme.fontWeight.bold};
  `}
`;

export const StyledP = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayishBlue};
  `}
  font-size: 1.20rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 2rem;

    & ${StyledCard}:nth-child(1) {
      grid-row: span 2 / span 2;
      grid-column-start: 1;
      grid-row-start: 2;
    }
    & ${StyledCard}:nth-child(2) {
      grid-row: span 2 / span 2;
      grid-column-start: 2;
      grid-row-start: 1;
    }
    & ${StyledCard}:nth-child(3) {
      grid-row: span 2 / span 2;
      grid-column-start: 2;
      grid-row-start: 3;
    }
    & ${StyledCard}:nth-child(4) {
      grid-row: span 2 / span 2;
      grid-column-start: 3;
      grid-row-start: 2;
    }
  }
`;
