"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import Link from "next/link";
export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/assets/images/banner/banner1.png",
      title: "조유리 새로운 엘범 LOVE ALL",
      detail1: "조유리랑 택시 타고 떠날 준비 했어?",
      detail2: "타이들은 당연하고, 수록곡도 맛집인데 당장 들어봐야겠지?",
      link: "https://www.youtube.com/watch?v=ZpGFolbbeHo",
    },
    {
      src: "/assets/images/banner/banner2.png",
      title: "조유리 X 로지텍 세기의 조합 탄생?",
      detail1: "조유리가 로지텍의 키보드를 광고한다.",
      detail2: "로지텍의 새로운 여성 게이밍 시리즈 오로라와 조유리의 콜라보는?",
      link: "https://www.youtube.com/watch?v=ZEUGWx4Zfec",
    },
    {
      src: "/assets/images/banner/banner3.png",
      title: "조유리 X 립톤과 함께 하는 올 여름",
      detail1: "조유리와 립톤의 아이스티가 만났다.",
      detail2: "올 여름을 청량하게 책임질 조유리와 립톤의 만남!",
      link: "https://www.youtube.com/watch?v=A20cTHhs6x0",
    },
    {
      src: "/assets/images/banner/banner4.png",
      title: "조유리 X 새로와 오늘 밤 한잔",
      detail1: "내가 버추얼 아이돌이라고?",
      detail2: "버추얼 아이돌과 함께 하는 새로 돌잔치 궁금하지 않아?",
      link: "https://www.youtube.com/watch?v=ukC_fRGNu7Y",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "1280 / 480" }}
    >
      <div
        className="flex transition-transform duration-700"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full flex-shrink-0"
            style={{ aspectRatio: "1280 / 480" }}
          >
            <Image
              src={image.src}
              alt={`Slide ${index}`}
              className="object-cover"
              fill
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-16 flex w-full justify-between items-center px-12">
              <div className="flex flex-col">
                <p className="text-white font-pretendard font-bold text-3xl mb-3">
                  {image.title}
                </p>
                <p className="text-white font-pretendard text-xl font-regular">
                  {image.detail1}
                </p>
                <p className="text-white font-pretendard text-xl font-regular">
                  {image.detail2}
                </p>
              </div>
              <div>
                <Link
                  className="px-[15px] py-[20px] text-xl font-pretendard font-semibold text-black bg-white rounded-full"
                  href={image.link}
                >
                  자세한 정보 보러가기
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <MdNavigateBefore
        className="absolute top-1/2 left-12 transform -translate-y-1/2 cursor-pointer text-white hover:text-primary transition-all duration-300"
        size={50}
        onClick={handlePrev}
      />
      <MdNavigateNext
        className="absolute top-1/2 right-12 transform -translate-y-1/2 cursor-pointer text-white hover:text-primary transition-all duration-300"
        size={50}
        onClick={handleNext}
      />
    </div>
  );
}
