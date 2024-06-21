"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-cemter">
        <CiMenuFries className="text-[32px] text-accent hover:text-accent-hover" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb40 text-center text-2xl ">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-[#fff]">
              HMQuan <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-accent-hover border-b-2 border-accent-hover "
                }text-xl capitalize hover:text-accent-hover transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
