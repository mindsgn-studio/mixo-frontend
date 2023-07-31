import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { SwiperCard } from './swiperCard';

interface HeroProps {
  randomTracks: any;
}

export const Hero = ({ randomTracks }: HeroProps) => {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 2500
      }}
      modules={[Autoplay, Pagination]}
    >
      {randomTracks.map((link: any) => {
        return (
          <SwiperSlide key={link._id}>
            <SwiperCard
              title={link.title}
              artist={link.artist[0]}
              art={link.artwork}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
