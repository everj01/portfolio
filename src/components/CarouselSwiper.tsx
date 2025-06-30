import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type Props = {
  images: string[];
};

export default function CarouselSwiper({ images }: Props) {
  if (!images || images.length === 0) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="w-full max-w-md"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Imagen ${index + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
