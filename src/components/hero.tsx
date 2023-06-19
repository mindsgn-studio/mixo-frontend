import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { heroLinks } from "@/constants/heroLinks";
import { SwiperCard } from "./swiperCard";

interface HeroProps {
  randomTracks: any;
}

export const Hero = ({ randomTracks }: HeroProps) => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      modules={[Autoplay, Pagination]}
    >
      {randomTracks.map((link: any) => {
        return (
          <SwiperSlide key={link.name}>
            <SwiperCard title={link.name} artist={link.artist} art={link.art} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
