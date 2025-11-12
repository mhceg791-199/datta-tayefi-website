import HeroSlider from "../../components/home/HeroSlider/HeroSlider";
import WorldClock from "../../components/home/WorldClock/WorldClock";
import LogoAnimation from "../../components/shared/Overview/Overview";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import ConstructionWhy from "../../components/home/ConstructionWhy/ConstructionWhy";

function Home() {
  const cities = [
    { city: "Cairo", tz: "Africa/Cairo" },
    { city: "Canada", tz: "America/Toronto" },
    { city: "Dubai", tz: "Asia/Dubai" },
    { city: "Hong Kong", tz: "Asia/Hong_Kong" },
    { city: "Amsterdam", tz: "Europe/Amsterdam" },
    { city: "Tokyo", tz: "Asia/Tokyo" },
  ];

  return (
    <>
      <HeroSlider />
      <LogoAnimation />
      <div className="px-6 my-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-10"
        >
          {cities.map((c) => (
            <SwiperSlide key={c.city}>
              <WorldClock city={c.city} tz={c.tz} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <ConstructionWhy />
    </>
  );
}

export default Home;
