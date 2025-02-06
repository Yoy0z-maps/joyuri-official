"use client";
import { useEffect, useRef } from "react";
import { Album } from "@/type/Album";
import AlbumDetail from "./AlbumDetail";
import { Line } from "@/utils/line";

export default function MusicSheetBg({ album }: { album: Album }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const musicSheet = useRef<Line[]>([
    new Line(1, 100, 0),
    new Line(1, 100, 50),
    new Line(1, 100, 100),
    new Line(1, 100, 150),
    new Line(1, 100, 200),
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resize = () => {
      const stageWidth = document.body.clientWidth;
      const stageHeight = document.body.clientHeight;

      if (canvas && ctx) {
        canvas.width = stageWidth * 2;
        canvas.height = stageHeight * 2;
        ctx.scale(2, 2);

        musicSheet.current.forEach((line) =>
          line.resize(stageWidth, stageHeight)
        );
      }
    };
    const animate = () => {
      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        musicSheet.current.forEach((line) => {
          line.draw(ctx);
        });

        requestAnimationFrame(animate);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-[100%] h-[100vh] bg-music-sheet">
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 left-0 w-[100%] h-[100vh] z-30"
      ></canvas>
      <div className="absolute bottom-0 left-0 z-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/album/details/treble_clef.png"
          alt="music-sheet"
        />
      </div>
      <div className="absolute top-0 right-0 z-50">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/images/album/details/bass_clef.png"
          alt="music-sheet"
        />
      </div>
      <AlbumDetail album={album} />
    </div>
  );
}
