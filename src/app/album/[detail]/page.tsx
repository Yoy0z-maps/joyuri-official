"use client";
import MusicSheetBg from "@/components/album/detail/MusicSheetBg";
import NightViewBg from "@/components/album/detail/NightViewBg";
import TaxiBg from "@/components/album/detail/TaxiBg";
import { usePathname } from "next/navigation";

export default function AlbumDetailPage() {
  const pathname = usePathname();

  const albumData = {
    1: {
      title: "GLASSY",
      description:
        'IZ*ONE(아이즈원) 메인보컬 조유리에서 솔로 아티스트 조유리로의 첫걸음 "GLASSY". 조유리의 첫 싱글 앨범명이자 동명의 타이틀곡 "GLASSY"는 GLASS(유리)에 접미사 Y를 더해 어디서든 빛을 내는 유리스러운 매력을 보여주겠다는 의미이며 이를 바탕으로 아티스트 조유리이자 인간 조유리의 있는 그대로의 모습을 자신 있게 표현했다.',
      album: "SINGLE NO.1",
      src: "/assets/images/album/details/album1.png",
      date: "2021.10.07 (THU)",
      list: [
        { id: 1, title: "GLASSY", attribute: "TITLE" },
        { id: 2, title: "Express Moon", attribute: "HOT" },
        { id: 3, title: "Autumn Box", attribute: "" },
      ],
      mvLink: "https://youtu.be/8rd_E4cmcBg?si=vCE7timGqqHS5OXB",
      rcLink: "https://youtu.be/WhMKR68m8z4?si=ZXPK_FvMWkNY8QrQ",
    },
    2: {
      title: "Op.22 Y-Waltz : in Major",
      description:
        "2021년 “GLASSY” 이후 8개월 만에 돌아온 조유리가 <조유리 2022 무곡집> 시리즈로 돌아왔다. 그 오프닝을 알리는 첫 번째 미니 앨범 “Op.22 Y-Waltz : in Major”는 평범한 일상의 해프닝들을 대하는 유연한 자세를 왈츠로 표현했다.",
      album: "MINI NO.1",
      src: "/assets/images/album/details/album2.png",
      date: "2022.06.02 (TUE)",
      list: [
        { id: 1, title: "Round and Around", attribute: "HOT" },
        { id: 2, title: "Love Shhh!", attribute: "TITLE" },
        { id: 3, title: "Rolla Skates", attribute: "" },
        { id: 4, title: "This Time", attribute: "" },
        { id: 5, title: "Opening", attribute: "" },
      ],
      mvLink: "https://youtu.be/w2P9NT8P8qA?si=gYqs7N34y2tzSphx",
      rcLink: "https://youtu.be/wHyuYEkmCjM?si=MFGtYpF79BrZ3XMd",
    },
    3: {
      title: "Op.22 Y-Waltz : in Minor",
      description:
        '“Op.22 Y-Waltz : in Minor”는 [조유리 2022 무곡집]의 두 번째 이야기다. 조유리는 “Op.22 Y-Waltz : in Major”에서 삶을 대하는 자세를 ‘왈츠’로 해석했다. 이어 이번 앨범에서는 ‘나’를 사랑하는 마음에서 시작된, "우리는 모두 사랑스러운 존재이며 당신의 결점까지도 모두 사랑한다"는 따뜻한 위로와 응원의 메시지를 담아냈다.',
      album: "SINGLE NO.2",
      src: "/assets/images/album/details/album3.png",
      date: "2022.10.24 (MON)",
      list: [
        { id: 1, title: "Loveable", attribute: "TITLE" },
        { id: 2, title: "Blank", attribute: "" },
        { id: 3, title: "Favorite Part", attribute: "HOT" },
      ],
      mvLink: "https://youtu.be/4zmWVaAZU-s?si=xZKp7RWgwSfhxfH6",
      rcLink: "https://youtu.be/Km098QuxciA?si=R34txfD_NJrCrMAA",
    },
    4: {
      title: "LOVE ALL",
      description:
        "‘올라운더’ 조유리, 사랑에 대한 모든 순간과 다채로운 감정 담은 미니 2집 ‘LOVE ALL’ 발매! 사랑을 처음 시작하는 순간부터, 사랑하고 헤어지는 모든 순간의 감정… 조유리의 미니 2집 ‘LOVE ALL’타이틀곡 ‘TAXI’, 사랑하는 너에게 당장이라도 달려가고 싶은 마음을 담은 직진 고백송",
      album: "MINI NO.2",
      src: "/assets/images/album/details/album4.png",
      date: "2023.08.09 (WED)",
      list: [
        { id: 1, title: "TAXI", attribute: "TITLE" },
        { id: 2, title: "Lemon Black Tea", attribute: "HOT" },
        { id: 3, title: "Bitter Taste", attribute: "" },
        { id: 4, title: "Hang on", attribute: "" },
        { id: 5, title: "Bruise", attribute: "" },
      ],
      mvLink: "https://youtu.be/ZpGFolbbeHo?si=7LnHN0jE5iDBqA0j",
      rcLink: "https://youtu.be/KAMYFeidL-I?si=mq9JWLxbuNn4dkFE",
    },
  };
  const album = albumData[pathname.split("/")[2]];

  if (pathname === "/album/1")
    return (
      <>
        <NightViewBg album={album} />
      </>
    );

  if (pathname === "/album/2")
    return (
      <>
        <MusicSheetBg album={album} />
      </>
    );
  if (pathname === "/album/3")
    return (
      <>
        <MusicSheetBg album={album} />
      </>
    );
  if (pathname === "/album/4")
    return (
      <>
        <TaxiBg album={album} />
      </>
    );
}
