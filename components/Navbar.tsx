"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/actions/auth.action";

const Navbar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await logout();

      console.log("User signed out");
      toast.success("Logout Successfully");
      router.push("/sign-in");
    } catch (error) {
      console.error("Error signing out");
    }
  };
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={38}
          height={32}
          className="h-auto w-auto"
        />
        <h2 className="text-primary-100">PrepWise</h2>
      </Link>

      <Button className="cursor-pointer" onClick={handleLogout}>
        Logout
      </Button>
    </nav>
  );
};

export default Navbar;
