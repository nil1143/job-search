import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Job Marshal Logo" width={40} height={40} />
        <h1 className="text-2xl font-bold">
          Job<span className="text-primary">Search</span>
        </h1>
      </Link>

      <div className="flex items-center gap-4">
      <ThemeToggle />

        <Button>Login</Button>
      </div>
    </nav>
  );
};

export default Navbar;
