import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import d1 from "../../../assets/LandingPage/DattaSlider/career.webp";
import d2 from "../../../assets/LandingPage/DattaSlider/home.webp";
import d3 from "../../../assets/LandingPage/DattaSlider/p13.webp";
import landSettings from "../../../data/settings/settings";

const dattaImages = [d1, d3, d2];

export default function DattaSlider() {
  return (
    <Slider {...landSettings} className="w-full h-full">
      {dattaImages.map((img, i) => (
        <div key={i} className="w-full h-screen overflow-hidden">
          <img
            src={img}
            className="w-full h-full object-cover animate-zoom-smooth"
            alt="Datta Slide"
          />
        </div>
      ))}
    </Slider>
  );
}
