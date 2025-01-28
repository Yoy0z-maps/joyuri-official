"use client";

import { Album } from "@/type/Album";
import AlbumDetail from "./AlbumDetail";
import { useEffect } from "react";

export default function MusicSheetBg({ album }: { album: Album }) {
  useEffect(() => {
    const count = 500;
    const scene = document.querySelector("#scene");
    let i = 0;

    while (i < count) {
      const star = document.createElement("i");
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const duration = Math.random() * 10;
      const size = Math.random() * 2;

      // style
      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";
      star.style.background = "white";
      star.style.position = "absolute";
      star.style.borderRadius = "50%";

      // animation
      const styleSheet = document.styleSheets[0];
      styleSheet.insertRule(
        `
            @keyframes animate {
                0% {
                opacity: 0;
                transform: translateY(0);
                }
                10%, 90% {
                opacity: 1;
                }
                100% {
                opacity: 0;
                transform: translateY(-100px);
                }
            }
        `,
        styleSheet.cssRules.length
      );
      star.style.animationDuration = 5 + duration + "s";
      star.style.animationDelay = duration + "s";

      star.style.animation = `animate ${5 + duration}s linear infinite`;

      scene?.appendChild(star);
      i++;
    }
  }, []);

  return (
    <div
      id="scene"
      className="z-10 relative w-[100%] h-[100vh] bg-gradient-to-t from-nightview-bottom to-nightview-top overflow-hidden bg-fixed"
    >
      <div
        id="moon"
        className="absolute top-[100px] left-[400px] w-[100px] h-[100px] bg-white rounded-full z-40 after:content-[''] after:absolute after:top-[-15px] after:left-[15px] after:w-[100%] after:h-[100%] after:rounded-full after:bg-gradient-to-t after:from-nightview-bottom after:to-nightview-top after:bg-fixed"
      ></div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={"/assets/images/album/details/forest.png"}
        alt="album"
        id="forest"
        className="absolute bottom-0 left-0 w-[100%] z-50 scale-125"
      />
      <AlbumDetail album={album} />
    </div>
  );
}
