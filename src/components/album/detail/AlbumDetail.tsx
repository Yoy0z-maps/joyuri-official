"use client";

import { Album } from "@/type/Album";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AlbumDetail({ album }: { album: Album }) {
  // 소형 플레이어로 전환 w-[400px] h-[680px] transition-all duration-300 src, title, description만 보이기
  const [isSimplify, setIsSimplify] = useState(false);
  const simplifyAlbumInfo = () => {
    setIsSimplify(!isSimplify);
    console.log(isSimplify);
  };

  return (
    <div
      className={`absolute transition-all duration-500 z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl backdrop-blur-md bg-white/40 flex flex-col gap-y-3 ${
        isSimplify ? "w-[300px] p-[20px] " : "w-[770px] h-[440px] p-[30px] "
      }`}
    >
      <div className="flex justify-center items-end relative">
        <div className="mr-auto gap-x-[20px] flex absolute top-0 left-0">
          <Link
            href={"/album"}
            className="w-[20px] h-[20px] bg-window-red rounded-full"
          ></Link>
          <Link
            href={album.mvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[20px] h-[20px] bg-window-yellow rounded-full"
          ></Link>
          <div
            onClick={simplifyAlbumInfo}
            className="w-[20px] h-[20px] bg-window-green rounded-full"
          ></div>
        </div>
        <p
          className={`${isSimplify ? "hidden" : "block"} font-pretendard font-medium text-primary text-xl -translate-y-1`}
        >
          {album.date}
        </p>
      </div>
      <div
        className={`flex gap-x-[30px] ${isSimplify ? "flex-col translate-y-[20px]" : ""}`}
      >
        <Link href={album.rcLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={album.src}
            alt="album"
            width={isSimplify ? 260 : 340}
            height={isSimplify ? 260 : 340}
            className="rounded-2xl"
          />
        </Link>
        <div className="flex flex-col w-[340px]">
          <p
            className={`${isSimplify ? "mt-1" : ""} text-[20px] font-semibold font-pretendard text-black`}
          >
            {album.title}
          </p>

          <p
            className={`${isSimplify ? "hidden" : "line-clamp-4"} text-[18px] font-regular font-pretendard text-black mt-1`}
          >
            {album.description}
          </p>
          <div
            className={`${isSimplify ? "w-[260px]" : "w-full"} h-[1px] bg-white my-3`}
          ></div>
          {album.list.map((item, index) => (
            <div
              className="flex gap-x-[15px] items-center justify-start"
              key={item.id}
            >
              <p className="mb-1 font-pretendard font-regular text-black text-[18px]">
                {`${index + 1}. ${item.title}`}
              </p>
              {item.attribute === "" ? (
                <></>
              ) : item.attribute === "TITLE" ? (
                <p className="text-white text-[10px] mb-1 px-1 rounded-sm bg-window-red">
                  {item.attribute}
                </p>
              ) : (
                <p className="text-white text-[10px] mb-1 px-1 rounded-sm bg-window-red">
                  {item.attribute}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <div
        className={`${isSimplify ? "block" : "hidden"} w-full h-[1px]`}
      ></div>
    </div>
  );
}
