import styled, { css } from "styled-components";

const CardFeatureWrapper = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.grayishBlue};
  `}
`;
export default CardFeatureWrapper;
