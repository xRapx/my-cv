"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Documents",
    path: "/documents",
  },
  {
    name: "Services",
    path: "/service",
  },
  {
    name: "About me",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
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
