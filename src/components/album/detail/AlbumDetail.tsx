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
  };

  return (
    <div className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[770px] h-[440px] rounded-2xl backdrop-blur-md bg-white/40 p-[30px] flex flex-col gap-y-3">
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
        <p className="font-pretendard font-medium text-primary text-xl -translate-y-1">
          {album.date}
        </p>
      </div>
      <div className="flex gap-x-[30px]">
        <Link href={album.rcLink} target="_blank" rel="noopener noreferrer">
          <Image
            src={album.src}
            alt="album"
            width={340}
            height={340}
            className="rounded-2xl"
          />
        </Link>
        <div className="flex flex-col w-[340px]">
          <p className="text-[20px] font-semibold font-pretendard text-black">
            {album.title}
          </p>
          <p className="text-[18px] font-regular font-pretendard text-deep-gray line-clamp-4">
            {album.description}
          </p>
          <div className="w-full h-[1px] bg-light-gray"></div>
          <p>수록곡</p>
          {album.list.map((item) => (
            <div className="flex gap-x-[10px]" key={item.id}>
              <p>{item.title}</p>
              {item.attribute === "" ? (
                <></>
              ) : item.attribute === "TITLE" ? (
                <p>{item.attribute}</p>
              ) : (
                <p>{item.attribute}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
