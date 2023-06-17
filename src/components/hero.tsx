import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { heroLinks } from "@/constants/heroLinks";
import { HeroCard } from "./HeroCard";

interface HeroLinks {}

export const Hero = () => {
  return (
    <Box height="500px" width="85vw">
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
              <HeroCard
                art={link.art}
                artist={link.artist}
                title={link.title}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
