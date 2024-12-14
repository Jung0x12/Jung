import Image from "next/image";

import LinkWithIcon from "@/components/common/LinkWithIcon";

const Isle = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-[42vw] items-end pe-8 2xl:pe-16">
        <div className="flex flex-col w-[35vw] 2xl:w-[30vw] pt-20 2xl:pt-32">
          <LinkWithIcon href="https://isle.finance/" title="Isle Finance" />
          <div className="text-xl mt-6 2xl:text-2xl font-varela">
            Isle Finance is the decentralized protocol for globally accessible
            supply chain finance, with a mission to bring the world's supply
            chain activity on-chain while expanding capital access and
            increasing supply chain resilience.
          </div>
        </div>
      </div>
      <div className="flex flex-grow py-8">
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
