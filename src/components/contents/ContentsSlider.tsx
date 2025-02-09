"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";
import Slider from "react-slick";

export default function ContentsSlider() {
  const contents = [
    {
      src: "/assets/images/content/content2.png",
      title: "넷플릭스 오징어게임2",
      detail1: "오징어 게임에 출현한 조유리",
      detail2: "2024년 12월 넷플릭스 최고의 출시작 오징어게임2 감상하기",
    },
    {
      src: "/assets/images/content/content3.png",
      title: "Glassy 2기 모집 시작",
      detail1: "2025년 2월 3일 PM08:00 Glassy 2기 열차 출발합니다~",
      detail2:
        "모집 방법과 정보 그리고 Glassy 2기에게 주어지는 각종 혜택은 카페에서 확인하세요",
    },
    {
      src: "/assets/images/content/content5.png",
      title: "오늘의 쪼율 TMI",
      detail1: "매일 매일 쪼율의 TMI가 궁금하지 않아?",
      detail2:
        "bubble과 chat plut에서 JOYURI를 구독하고 쪼율의 TMI를 확인해보세요",
    },
    {
      src: "/assets/images/content/content4.png",
      title: "the GAME must go on",
      detail1: "지금부터 본격적인 놀이의 시간",
      detail2: "더블유 W Vol.2 H형 잡지에서 조유리를 만나보세요.",
    },
    {
      src: "/assets/images/content/content1.png",
      title: "웹드라마 미미쿠스",
      detail1: "웹드라마 미미쿠스에 조유리 강림",
      detail2: "진짜가 되기 위한 치열한 생존기를 그린 하이틴 드라마",
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
