import { Album } from "@/type/Album";
import AlbumDetail from "./AlbumDetail";

export default function NightViewBg({ album }: { album: Album }) {
  return (
    <div className="w-full h-full relative bg-red-500">
      <AlbumDetail album={album} />
    </div>
  );
}
