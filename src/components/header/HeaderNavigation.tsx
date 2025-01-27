"use client";
import Link from "next/link";
import { useNavigationHighlighter } from "@/hook/useNavigationHighlighter";

export default function HeaderNavigation() {
  const { currentPage } = useNavigationHighlighter();

  return (
    <div className="flex gap-x-14">
      <Link
        className={`text-xl font-pretendard transition-all duration-500 ${
          currentPage === "/"
            ? "text-primary font-semibold underline underline-offset-4"
            : "text-light-gray font-light"
        }`}
        href={"/"}
      >
        HOME
      </Link>
      <Link
        className={`text-xl font-pretendard transition-all duration-500 ${
          currentPage === "/album"
            ? "text-primary font-semibold underline underline-offset-4"
            : "text-light-gray font-light"
        }`}
        href={"/album"}
      >
        ALBUM
      </Link>
      <Link
        className={`text-xl font-pretendard transition-all duration-500 ${
          currentPage === "/contents"
            ? "text-primary font-semibold underline underline-offset-4"
            : "text-light-gray font-light"
        }`}
        href={"/contents"}
      >
        CONTENTS
      </Link>
    </div>
  );
}
