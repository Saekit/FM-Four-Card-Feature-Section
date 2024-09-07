import styled, { css } from "styled-components";

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
`;

export const StyledH1 = styled.h1`
  font-size: 2rem;
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
  font-size: 1.25rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
