import Isle from "./isle/Isle";
import Lativ from "./lativ/Lativ";
import SportyBet from "./sportybet/SportyBet";

const PortfolioContent = () => {
  return (
    <div className="flex flex-col items-center pb-16">
      <span className="text-9xl font-bebasNeue pt-8 pb-16">Portfolio</span>
      <div className="flex flex-col gap-24">
        <Isle />
        <SportyBet />
        <Lativ />
      </div>
    </div>
  );
};

export default PortfolioContent;
