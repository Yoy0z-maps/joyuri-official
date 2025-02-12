"use client";

import Image from "next/image";
import HeaderNavigation from "./HeaderNavigation";
import HeaderLink from "./HeaderLink";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const albumDetailRegex = /^\/album\/\d+$/;

  if (pathname === "/test" || albumDetailRegex.test(pathname)) {
    return null;
  }

  return (
    <div className="w-screen h-[180px] px-14 bg-white flex items-center justify-between relative">
      <HeaderNavigation />
      <Image
        className="absolute left-[50%] translate-x-[-125px]"
        src="/assets/images/header_logo.png"
        alt="logo"
        width={250}
        height={83.33}
      />
      <HeaderLink />
    </div>
  );
}
