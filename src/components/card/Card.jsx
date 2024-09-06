import { Description, IconContainer, StyledCard, Title } from "./Card.styles";

const Card = ({ cardContent }) => {
  const { title, description, icon } = cardContent;
  return (
    <StyledCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <IconContainer>{icon}</IconContainer>
    </StyledCard>
  );
};
export default Card;
