import styled, { css } from "styled-components";

export const StyledCard = styled.div`
  position: relative;
  min-width: 300px;
  max-width: 380px;
  height: 220px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
`;

export const TopColor = styled.div`
  position: absolute;
  height: 5px;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.$cardColor};
  border-radius: 30px 30px 0 0;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  line-height: 2;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.veryDarkBlue};
    font-weight: ${theme.fontWeight.bold};
  `}
  font-size: 1.5rem;
  margin: 0;
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayishBlue};
    font-weight: ${theme.fontWeight.normal};
  `}
  margin: 0;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: end;
`;
