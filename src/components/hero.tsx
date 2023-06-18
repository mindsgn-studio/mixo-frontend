import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { heroLinks } from "@/constants/heroLinks";
import { HeroCard } from "@/components/heroCard";

export const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      modules={[Autoplay, Pagination]}
    >
      {heroLinks.map((link: any) => {
        return (
          <SwiperSlide key={link.name}>
            <HeroCard art={link.art} artist={link.artist} title={link.title} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
