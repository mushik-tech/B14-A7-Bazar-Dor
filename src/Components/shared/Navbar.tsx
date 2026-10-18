import { Button } from "@heroui/react";
import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 border-b border-separator bg-background">
      <nav className="max-w-6xl mx-auto">
        <header className="flex h-16 items-center justify-between px-6">
          <div>
            <Logo></Logo>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Button variant="ghost" className="rounded-lg">
                সাইন ইন
              </Button>
            </li>
            <li>
              <Button className="bg-[#05893E] rounded-lg" >সাইন আপ</Button>
            </li>
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
