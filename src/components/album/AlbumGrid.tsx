import Image from "next/image";

export default function AlbumGrid() {
  const albums = [
    { src: "/assets/album/album1.png", title: "SINGLE NO.1", name: "GLASSY" },
    {
      src: "/assets/album/album2.png",
      title: "MINI NO.1",
      name: "Op.22 Y-Waltz : in Major",
    },
    {
      src: "/assets/album/album3.png",
      title: "SINGLE NO.2",
      name: "Op.22 Y-Waltz : in M...",
    },
    { src: "/assets/album/album4.png", title: "MINI NO.2", name: "LOVE ALL" },
  ];

  return (
    <div className="grid grid-cols-3 gap-y-10 gap-x-24 bg-white">
      {albums.map((album, index) => (
        <div key={index} className="w-full h-full flex flex-col">
          <Image src={album.src} alt={album.title} width={330} height={230} />
          <div className="flex justify-start items-center gap-3 mt-3">
            <p className="text-black font-pretendard font-bold text-xl">
              {album.title}
            </p>
            <p className="text-deep-gray font-pretendard text-xl font-regular">
              {album.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
