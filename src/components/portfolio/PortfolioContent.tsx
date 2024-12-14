import Isle from "./isle/Isle";
import Lativ from "./lativ/Lativ";
import SportyBet from "./sportybet/SportyBet";

const PortfolioContent = () => {
  return (
    <div className="flex flex-col">
      <Isle />
      <SportyBet />
      <Lativ />
    </div>
  );
};

export default PortfolioContent;
