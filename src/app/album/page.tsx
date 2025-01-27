import AlbumGrid from "@/components/album/AlbumGrid";
import NavigationHighlighter from "@/components/NavigationHighlighter";

export default function Album() {
  return (
    <div className="w-full h-[calc(100vh-180px)] bg-white px-12 flex items-center justify-center">
      <NavigationHighlighter path="/album" />
      <AlbumGrid />
    </div>
  );
}
