import Link from "next/link";

import { menuItems } from "@/app/constants";

const HomeContent = () => {
  const homeMenuItems = menuItems.filter((item) => item.name !== "Home");

  return (
    <div className="flex h-scree">
      <div className="w-2/5">
        <div className="flex flex-col h-full">
          <div className="flex-grow"></div>
          <div className="h-2/5 flex items-start justify-end">
            <div className="w-[400px] 2xl:w-[600px] space-y-6">
              <div className="text-xl 2xl:text-3xl font-bold">Jung</div>
              <div className="2xl:text-xl">
                Software Developer / Blockchain & Mobile
              </div>
              <div className="2xl:text-xl">
                Working full-time as a Blockchain Engineer at
                <br /> Isle Finance
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen w-3/5 flex items-center">
        <div className="flex flex-col justify-between h-[75vh] pl-12 text-9xl 2xl:text-[200px]">
          {homeMenuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={"hover-slide-left"}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
