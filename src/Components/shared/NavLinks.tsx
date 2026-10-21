"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinksProps {
  href: string;
  children: React.ReactNode;
}

const NavLinks = ({ href, children }: NavLinksProps) => {
  const pathname = usePathname();

  const isActive = pathname === `/category/${href}`;


  return (
    <Link
      href={`/category/${href}`}
      className={`${isActive ? "bg-[#047F39] rounded-lg text-white text-sm px-3 py-1" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
