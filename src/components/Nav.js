"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/service",
  },
  {
    name: "Skills",
    path: "/skill",
  },
  {
    name: "About me",
    path: "/about",
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathName &&
            "border-b-2 border-accent-hover text-accent-hover"
          } capitalize font-medium text-accent hover:text-accent-hover transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
