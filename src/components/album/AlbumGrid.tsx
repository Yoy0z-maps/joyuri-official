import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";

export default function AlbumGrid() {
  const albums = [
    {
      id: "1",
      src: "/assets/album/album1.png",
      title: "SINGLE NO.1",
      name: "GLASSY",
      color: "album-red",
    },
    {
      id: "2",
      src: "/assets/album/album2.png",
      title: "MINI NO.1",
      name: "Op.22 Y-Waltz : in Major",
      color: "album-green",
    },
    {
      id: "3",
      src: "/assets/album/album3.png",
      title: "SINGLE NO.2",
      name: "Op.22 Y-Waltz : in M...",
      color: "album-purple",
    },
    {
      id: "4",
      src: "/assets/album/album4.png",
      title: "MINI NO.2",
      name: "LOVE ALL",
      color: "album-yellow",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-y-10 gap-x-24 bg-white">
      {albums.map((album, index) => (
        <Link
          href={`/album/${album.id}`}
          key={index}
          className={classNames(
            "w-full h-full flex flex-col border-0 hover:border-[1px]",
            {
              "hover:border-album-red": album.color === "album-red",
              "hover:border-album-green": album.color === "album-green",
              "hover:border-album-purple": album.color === "album-purple",
              "hover:border-album-yellow": album.color === "album-yellow",
            }
          )}
        >
          <Image src={album.src} alt={album.title} width={330} height={230} />
          <div className="flex justify-start items-center gap-3 mt-3">
            <p className="text-black font-pretendard font-bold text-xl">
              {album.title}
            </p>
            <p className="text-deep-gray font-pretendard text-xl font-regular">
              {album.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
