import { Description, IconContainer, StyledCard, Title } from "./Card.styles";

const Card = ({ title, description, icon }) => (
  <StyledCard>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <IconContainer>{icon}</IconContainer>
  </StyledCard>
);
export default Card;
