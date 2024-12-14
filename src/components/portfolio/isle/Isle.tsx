import Image from "next/image";

import LinkWithIcon from "@/components/common/LinkWithIcon";

const Isle = () => {
  return (
    <div className="flex h-[calc(100vh-6rem)] w-full">
      <div className="flex flex-col w-[45vw] items-end pe-4 2xl:pe-6">
        <div className="h-[20vh]"></div>
        <div className="flex flex-col w-[35vw] 2xl:w-[30vw]">
          <LinkWithIcon
            href="https://testnet.app.isle.finance/pools"
            title="Isle Finance"
          />
          <div className="text-lg mt-6 2xl:text-xl">
            Isle Finance is the decentralized protocol for globally accessible
            supply chain finance, with a mission to bring the world's supply
            chain activity on-chain while expanding capital access and
            increasing supply chain resilience.
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="h-[16vh]"></div>
        <div className="w-[50vw]">
          <Image
            src="/isle.png"
            alt="Isle Finance"
            layout="responsive"
            width={3024}
            height={1660}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Isle;
