import { Link } from "react-router-dom";
import DattaSlider from "../../components/LandingPage/DattaSlider/DattaSlider";
import TayefiSlider from "../../components/LandingPage/TayefiSlider/TayefiSlider";
import logo from "../../assets/logo/logo2.webp";

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* LOGO */}
      <Link to="/home" className="absolute top-1 left-2 md:left-10 z-50">
        <img
          src={logo}
          alt="Datta And Tayefi"
          className="w-[45%] md:w-[15%] object-contain cursor-pointer"
        />
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        {/* DATTA */}
        <Link
          to="/home"
          className="relative w-full h-full overflow-hidden"
        >
          <DattaSlider />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-6xl md:text-7xl font-serif tracking-[0.15em] uppercase translate-y-24 md:translate-y-0 md:translate-x-24">
              DATTA
            </h1>
          </div>
        </Link>

        {/* TAYEFI */}
        <Link
          to="/home"
          className="relative w-full h-full overflow-hidden"
        >
          <TayefiSlider />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-white text-6xl md:text-7xl font-serif tracking-[0.15em] uppercase -translate-y-24 md:translate-y-0 md:-translate-x-24
"
            >
              TAYEFI
            </h1>
          </div>
        </Link>
      </div>

      {/* AMPERSAND */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-40">
        <span className="text-white text-5xl md:text-7xl font-serif opacity-70">
          &
        </span>
      </div>
    </div>
  );
}
