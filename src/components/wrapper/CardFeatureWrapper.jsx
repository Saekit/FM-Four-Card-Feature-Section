import styled, { css } from "styled-components";

const CardFeatureWrapper = styled.div`
  margin: 0;
  padding: 40px;
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.veryLightGray};
  `}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export default CardFeatureWrapper;
