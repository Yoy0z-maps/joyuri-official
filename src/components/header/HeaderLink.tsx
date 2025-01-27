import Image from "next/image";
import Link from "next/link";

export default function HeaderLink() {
  return (
    <div className="flex gap-x-6 justify-center items-center">
      <Link href="https://blip.kr/artists/JOYURI/schedule">
        <p className="text-lg font-pretendard font-light text-deep-gray hover:text-primary transition-all duration-300 hover:font-medium cursor-pointer">
          SCHEDULE
        </p>
      </Link>
      <Link href="https://www.youtube.com/@JOYURI_offcl">
        <Image
          src="/assets/images/youtube.svg"
          alt="youtube"
          width={35}
          height={35}
        />
      </Link>
      <Link href="https://open.spotify.com/artist/3LFFf4EpKn2krneZ9vozyz">
        <Image
          src="/assets/images/spotify.svg"
          alt="spotify"
          width={35}
          height={35}
        />
      </Link>
      <Link href="https://www.instagram.com/zo__glasss/#">
        <Image
          src="/assets/images/instagram.svg"
          alt="instagram"
          width={35}
          height={35}
        />
      </Link>
    </div>
  );
}
