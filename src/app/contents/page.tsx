import NavigationHighlighter from "@/components/NavigationHighlighter";
import ContentsSlider from "@/components/contents/ContentsSlider";

export default function Contents() {
  return (
    <div className="w-full h-[calc(100vh-180px)] bg-white flex items-start justify-start">
      <NavigationHighlighter path="/contents" />
      <ContentsSlider />
    </div>
  );
}
