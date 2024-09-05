import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  width: 300px;
  height: 250px;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.veryDarkBlue};
    font-weight: ${theme.fontWeight.bold};
  `}
  font-size: 1.5rem;
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayishBlue};
    font-weight: ${theme.fontWeight.normal};
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
`;
