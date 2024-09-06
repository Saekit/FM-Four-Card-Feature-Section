import {
  CardContainer,
  SecondH1,
  StyledH1,
  StyledP,
} from "./CardFeatureSection.styles";
import featureCards from "../../data/cards";
import Card from "../card/Card";

const CardFeatureSection = () => (
  <main>
    <StyledH1>Reliable, efficient delivery</StyledH1>
    <SecondH1>Powered by Technology</SecondH1>
    <StyledP>
      Our Artificial Intelligence powered tools use millions of project data
      points to ensure that your project is successful
    </StyledP>
    <CardContainer>
      {featureCards.map((card, idx) => (
        <Card key={idx} cardContent={card} />
      ))}
    </CardContainer>
  </main>
);
export default CardFeatureSection;
