"use client";

import { Album } from "@/type/Album";
import AlbumDetail from "./AlbumDetail";

export default function TaxiBg({ album }: { album: Album }) {
  return (
    <div
      id="body"
      className="relative flex justify-center items-center h-[100vh] overflow-hidden bg-road"
    >
      <div
        id="road"
        className="relative transform-3d rotate-[-15deg] before:animate-animate_road flex w-[100vh] justify-center items-center before:absolute before:content-[''] before:w-[100vw] before:h-[4px] before:bg-stripe"
      >
        <div
          id="taxi"
          className="absolute right-[0px] w-[200px] h-[80px] bg-album-yellow rounded-[10px] transform-3d z-10 shadow-taxi perspective-[800px] animate-animate_taxi before:absolute before:content-[''] before:top-[12px] before:left-[2px] before:w-[5px] before:h-[15px] before:rounded-[2px] before:bg-taxi_red_light before:shadow-taxi_red_light after:absolute after:content-[''] after:top-[10px] after:right-[2px] after:w-[6px] after:h-[16px] after:rounded-[2px] after:bg-white after:shadow-taxi_white_light"
        >
          <div
            id="light_beam"
            className="absolute top-[5px] right-[-2px] w-[10px] h-[70px] bg-light_beam rounded-[15px] transform-3d before:absolute before:content-[''] before:top-[5px] before:left-0 before:w-[150px] before:h-[16px] before:bg-light_beam_before before:transform-light_beam after:absolute after:content-[''] after:bottom-[5px] after:left-0 after:w-[150px] after:h-[16px] after:bg-light_beam_before after:transform-light_beam"
          ></div>
          <div
            id="side_mirror"
            className="absolute top-[0px] bottom-[0px] left-[0px] right-[0px] before:absolute before:content-[''] before:top-[-8px] before:right-[40px] before:w-[5px] before:h-[10px] before:bg-album-yellow before:rounded-tr-[10px] after:absolute after:content-[''] after:bottom-[-8px] after:right-[40px] after:w-[5px] after:h-[10px] after:bg-album-yellow after:rounded-br-[10px]"
          ></div>
          <span
            className="bg-taxi_yellow absolute rounded-[10px] overflow-hidden top-[5px] bottom-[5px] left-[10px] right-[10px] before:absolute before:content-['taxi'] before:top-[50%] before:left-[50%] before:bg-taxi_white before:p-[2px] before:rounded-[2px] before:shadow-taxi_logo before:z-50 before:text-[0.75em] before:font-[1000] before:tracking-[0.1em] before:uppercase 
  before:translate-x-[-50%] before:translate-y-[-50%] before:rotate-90"
          >
            <b className="absolute top-[0px] bottom-[0px] left-[30px] right-[30px] rounded-[10px] bg-taxi_black before:absolute before:content-[''] before:top-[6px] before:left-[25px] before:right-[25px] before:bottom-[6px] before:bg-taxi_yellow before:rounded-[5px] after:absolute after:content-[''] after:top-[0px] after:bottom-[0px] after:left-[58px] after:right-[58px] after:bg-taxi_yellow"></b>
            <i className="absolute top-[0px] bottom-[0px] left-[0px] right-[0px] before:absolute before:content-[''] before:top-[7px] before:left-[20px] before:w-[40px] before:h-[5px] before:bg-taxi_yellow before:origin-right before:rotate-[15deg] before:shadow-taxi_i_before after:absolute after:content-[''] after:bottom-[7px] after:left-[20px] after:w-[40px] after:h-[5px] after:bg-taxi_yellow after:origin-right after:rotate-[-15deg] after:shadow-taxi_i_after"></i>
          </span>
        </div>
        <div
          id="taxi"
          className="absolute left-[-150px] w-[200px] h-[80px] bg-album-yellow rounded-[10px] transform-3d z-10 shadow-taxi perspective-[800px] animate-animate_taxi before:absolute before:content-[''] before:top-[12px] before:left-[2px] before:w-[5px] before:h-[15px] before:rounded-[2px] before:bg-taxi_red_light before:shadow-taxi_red_light after:absolute after:content-[''] after:top-[10px] after:right-[2px] after:w-[6px] after:h-[16px] after:rounded-[2px] after:bg-white after:shadow-taxi_white_light"
        >
          <div
            id="light_beam"
            className="absolute top-[5px] right-[-2px] w-[10px] h-[70px] bg-light_beam rounded-[15px] transform-3d before:absolute before:content-[''] before:top-[5px] before:left-0 before:w-[150px] before:h-[16px] before:bg-light_beam_before before:transform-light_beam after:absolute after:content-[''] after:bottom-[5px] after:left-0 after:w-[150px] after:h-[16px] after:bg-light_beam_before after:transform-light_beam"
          ></div>
          <div
            id="side_mirror"
            className="absolute top-[0px] bottom-[0px] left-[0px] right-[0px] before:absolute before:content-[''] before:top-[-8px] before:right-[40px] before:w-[5px] before:h-[10px] before:bg-album-yellow before:rounded-tr-[10px] after:absolute after:content-[''] after:bottom-[-8px] after:right-[40px] after:w-[5px] after:h-[10px] after:bg-album-yellow after:rounded-br-[10px]"
          ></div>
          <span
            className="bg-taxi_yellow absolute rounded-[10px] overflow-hidden top-[5px] bottom-[5px] left-[10px] right-[10px] before:absolute before:content-['taxi'] before:top-[50%] before:left-[50%] before:bg-taxi_white before:p-[2px] before:rounded-[2px] before:shadow-taxi_logo before:z-50 before:text-[0.75em] before:font-[1000] before:tracking-[0.1em] before:uppercase 
  before:translate-x-[-50%] before:translate-y-[-50%] before:rotate-90"
          >
            <b className="absolute top-[0px] bottom-[0px] left-[30px] right-[30px] rounded-[10px] bg-taxi_black before:absolute before:content-[''] before:top-[6px] before:left-[25px] before:right-[25px] before:bottom-[6px] before:bg-taxi_yellow before:rounded-[5px] after:absolute after:content-[''] after:top-[0px] after:bottom-[0px] after:left-[58px] after:right-[58px] after:bg-taxi_yellow"></b>
            <i className="absolute top-[0px] bottom-[0px] left-[0px] right-[0px] before:absolute before:content-[''] before:top-[7px] before:left-[20px] before:w-[40px] before:h-[5px] before:bg-taxi_yellow before:origin-right before:rotate-[15deg] before:shadow-taxi_i_before after:absolute after:content-[''] after:bottom-[7px] after:left-[20px] after:w-[40px] after:h-[5px] after:bg-taxi_yellow after:origin-right after:rotate-[-15deg] after:shadow-taxi_i_after"></i>
          </span>
        </div>
      </div>
      <AlbumDetail album={album} />
    </div>
  );
}
