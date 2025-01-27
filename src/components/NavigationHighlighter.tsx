"use client";

import { useEffect } from "react";

import { useNavigationHighlighter } from "@/hook/useNavigationHighlighter";

export default function NavigationHighlighter({ path }: { path: string }) {
  const { setCurrentPage } = useNavigationHighlighter();

  useEffect(() => {
    if (path) setCurrentPage(path);
  }, [path, setCurrentPage]);

  return <></>;
}
