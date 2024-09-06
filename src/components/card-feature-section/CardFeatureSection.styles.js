import styled, { css } from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 2rem;
`;

export const SecondH1 = styled(StyledH1)`
  font-size: 2rem;
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.bold};
  `}
`;

export const StyledP = styled.p``;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
