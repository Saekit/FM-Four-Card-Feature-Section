import SupervisorIcon from "../assets/images/SupervisorIcon";
import TeamBuilder from "../assets/images/TeamBuilderIcon";
import KarmaIcon from "../assets/images/KarmaIcon";
import CalculatorIcon from "../assets/images/CalculatorIcon";

const featureCards = [
  {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    Icon: SupervisorIcon,
    color: "cyan",
  },
  {
    title: "Team Builder",
    description:
      "Scans our talent network to create the optimal team for your project",
    Icon: TeamBuilder,
    color: "red",
  },
  {
    title: "Karma",
    description: "Regularly evaluates our talent to ensure quality",
    Icon: KarmaIcon,
    color: "orange",
  },
  {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    Icon: CalculatorIcon,
    color: "blue",
  },
];
export default featureCards;
