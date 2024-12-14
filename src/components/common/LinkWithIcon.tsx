import React from "react";

interface LinkWithIconProps {
  href: string;
  title: string;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({ href, title }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-7xl flex items-center group"
    >
      {title}
      <img
        src="/link.png"
        alt={`${title} icon`}
        className="ml-4 opacity-0 transform translate-x-4 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
        width={24}
        height={24}
      />
    </a>
  );
};

export default LinkWithIcon;
