import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "../../../assets/LandingPage/TayefiSlider/1.webp";
import t2 from "../../../assets/LandingPage/TayefiSlider/2.webp";
import t3 from "../../../assets/LandingPage/TayefiSlider/p14.webp";
import landSettings from "../../../data/settings/settings";

const tayefiImages = [t1, t2, t3];

export default function TayefiSlider() {
  return (
    <Slider {...landSettings} className="w-full h-full">
      {tayefiImages.map((img, i) => (
        <div key={i} className="w-full h-screen overflow-hidden">
          <img
            src={img}
            className="w-full h-full object-cover animate-zoom-smooth"
            alt="Tayefi Slide"
          />
        </div>
      ))}
    </Slider>
  );
}
