"use client";

import { Avatar, Button, Spinner, Dropdown, Label, toast } from "@heroui/react";
import Logo from "./Logo";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data, isPending } = useSession();

  const handleSignOut = async () => {
    const { data, error } = await signOut();

    if (error) {
      toast.danger(error.message);
      return;
    }

    if (data) {
      toast.success("সফলভাবে সাইন আউট হয়েছে");
      redirect("/");
    }
  };

  return (
    <div className="sticky top-0 z-40 border-b border-separator bg-background">
      <nav className="max-w-6xl mx-auto">
        <header className="flex h-16 items-center justify-between px-6">
          <div>
            <Logo></Logo>
          </div>
          <ul className="flex items-center gap-4">
            {isPending ? (
              <Spinner></Spinner>
            ) : data?.user ? (
              <>
                <Avatar>
                  <Avatar.Image
                    alt="John Doe"
                    src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                  />
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>

                <Dropdown>
                  <Button aria-label="Menu" variant="ghost">
                    <h1 className="font-bold">
                      {data?.user?.name} <span>▾</span>
                    </h1>
                  </Button>
                  <Dropdown.Popover>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <div>
                          <h1 className="text-[17px] font-semibold">
                            {data?.user?.name}
                          </h1>
                          <p className="text-gray-600">{data?.user?.email}</p>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link href={"/my-profile"}>👤 আমার প্রোফাইল</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Button
                          variant="ghost"
                          className={"text-danger font-semibold"}
                          onClick={() => handleSignOut()}
                        >
                          ↩ সাইন আউট
                        </Button>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown.Popover>
                </Dropdown>
              </>
            ) : (
              <>
                <Link href={"/signin"}>
                  <Button variant="ghost" className="rounded-lg">
                    সাইন ইন
                  </Button>
                </Link>
                <Link href={"/signup"}>
                  <Button className="bg-[#05893E] rounded-lg">সাইন আপ</Button>
                </Link>
              </>
            )}
          </ul>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
