import Banner from "@/components/home/Banner";
import NavigationHighlighter from "@/components/NavigationHighlighter";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-180px)] bg-white">
      <NavigationHighlighter path="/" />
      <Banner />
    </div>
  );
}
