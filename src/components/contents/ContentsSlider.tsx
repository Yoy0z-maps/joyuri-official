"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";

export default function ContentsSlider() {
  const contents = [
    {
      src: "/assets/images/content/content1.png",
      title: "웹드라마 미미쿠스",
      detail1: "웹드라마 미미쿠스에 조유리 강림",
      detail2: "진짜가 되기 위한 치열한 생존기를 그린 하이틴 드라마",
    },
    {
      src: "/assets/images/content/content2.png",
      title: "넷플릭스 오징어게임2",
      detail1: "오징어 게임에 출현한 조유리",
      detail2: "2024년 12월 넷플릭스 최고의 출시작 오징어게임2 감상하기",
    },
    {
      src: "/assets/images/content/content3.png",
      title: "Glassy 1기 활동 종료",
      detail1: "Glassy 2기 모집 예정",
      detail2: "Glassy 2기 모집에 대한 자세한 글은 팬카페에서 확인해주세요.",
    },
    {
      src: "/assets/images/content/content4.png",
      title: "the GAME must go on",
      detail1: "지금부터 본격적인 놀이의 시간",
      detail2: "더블유 W Vol.2 H형 잡지에서 조유리를 만나보세요.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "20px",
  };

  const slickRef = useRef<Slider>(null);

  const handlePrev = () => {
    slickRef.current?.slickPrev();
  };
  const handleNext = () => {
    slickRef.current?.slickNext();
  };
  return (
    <div className="w-full h-full flex items-center justify-center pt-24 mx-20">
      <MdNavigateBefore
        className="absolute top-1/2 left-10 transform -translate-y-1/2 cursor-pointer text-primary transition-all duration-300"
        size={60}
        onClick={handlePrev}
      />

      <div className="w-[1100px] overflow-hidden h-full">
        <Slider
          {...settings}
          className="w-full h-full overflow-hidden"
          ref={slickRef}
        >
          {contents.map((content, index) => (
            <div key={index} className="gap-3 w-max-[540px] px-[10px]">
              <Image
                src={content.src}
                alt={content.title}
                width={540}
                height={302}
              />
              <h3 className="text-black font-pretendard font-bold text-2xl mt-4">
                {content.title}
              </h3>
              <p className="text-deep-gray font-pretendard font-regular text-lg mt-2">
                {content.detail1}
              </p>
              <p className="text-deep-gray font-pretendard font-regular text-lg">
                {content.detail2}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <MdNavigateNext
        className="absolute top-1/2 right-10 transform -translate-y-1/2 cursor-pointer text-primary transition-all duration-300"
        size={60}
        onClick={handleNext}
      />
    </div>
  );
}
