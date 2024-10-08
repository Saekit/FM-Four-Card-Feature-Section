import {
  Description,
  IconContainer,
  StyledCard,
  TextContainer,
  Title,
  TopColor,
} from "./Card.styles";

const Card = ({ cardContent }) => {
  const { title, description, Icon, color } = cardContent;
  return (
    <StyledCard>
      <TopColor $cardColor={color} />
      <TextContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContainer>
      <IconContainer>{<Icon />}</IconContainer>
    </StyledCard>
  );
};
export default Card;
