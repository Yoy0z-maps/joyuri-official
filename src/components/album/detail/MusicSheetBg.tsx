"use client";

import { Album } from "@/type/Album";
import AlbumDetail from "./AlbumDetail";

export default function MusicSheetBg({ album }: { album: Album }) {
  return (
    <div className="relative w-[100%] h-[100vh] bg-music-sheet">
      <div className="absolute bottom-0 left-0">
        <img
          src="/assets/images/album/details/treble_clef.png"
          alt="music-sheet"
        />
      </div>
      <div className="absolute top-0 right-0">
        <img
          src="/assets/images/album/details/bass_clef.png"
          alt="music-sheet"
        />
      </div>
      <AlbumDetail album={album} />
    </div>
  );
}
