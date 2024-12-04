"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { menuItems } from "@/app/constants";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex w-full h-24">
      <div className="flex-grow-[4] 2xl:flex-grow-[8] flex items-center">
        <div className="w-full h-px bg-brown ml-10"></div>
      </div>
      <div className="flex-grow-[3] flex items-center justify-center mx-16">
        <div className="flex justify-between w-full ">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`${
                pathname === item.path
                  ? "text-brown-400"
                  : "text-brown-dark hover:text-brown-400 duration-300"
              }`}
              onClick={(e) => {
                if (pathname === item.path) {
                  e.preventDefault();
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-grow-[1] flex items-center justify-center">
        <div className="w-full h-px bg-brown mr-10"></div>
      </div>
    </header>
  );
};

export default Header;
