import { Link } from "react-router-dom";
import DattaSlider from "../../components/LandingPage/DattaSlider/DattaSlider";
import TayefiSlider from "../../components/LandingPage/TayefiSlider/TayefiSlider";
import logo from "../../assets/logo/logo2.webp";

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Link to="/home" className="absolute top-1 left-10 z-50">
        <img
          src={logo}
          alt="Datta And Tayefi"
          className="w-[20%] object-contain cursor-pointer"
        />
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <Link
          to="/projects?brand=datta"
          className="relative w-full h-full overflow-hidden"
        >
          <DattaSlider />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-6xl md:text-7xl font-serif tracking-wider">
              Datta
            </h1>
          </div>
        </Link>

        <Link
          to="/projects?brand=tayefi"
          className="relative w-full h-full overflow-hidden"
        >
          <TayefiSlider />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-6xl md:text-7xl font-serif tracking-wider">
              Tayefi
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
