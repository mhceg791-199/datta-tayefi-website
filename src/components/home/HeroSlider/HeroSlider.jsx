import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import t1 from "../../../assets/LandingPage/TayefiSlider/1.webp";
import t2 from "../../../assets/LandingPage/TayefiSlider/2.webp";
import t3 from "../../../assets/LandingPage/TayefiSlider/p14.webp";

const slides = [
  {
    image: t1,
    title: "Architecture is a dialogue",
    subtitle: "between heritage and progress",
  },
  {
    image: t2,
    title: "Every line we draw begins",
    subtitle: "with purpose and ends with precision",
  },
  {
    image: t3,
    title: "We design spaces that",
    subtitle: "think, breathe, and belong",
  },
  {
    image: t2,
    title: "Award-winning",
    subtitle: "Projects Worldwide",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={currentSlide.image}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white select-none">
        <AnimatePresence mode="wait">
          <motion.h2
            key={"title-" + index}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-7xl font-bold tracking-widest text-center mb-5 uppercase"
          >
            {currentSlide.title}
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.h4
            key={"subtitle-" + index}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-4xl font-bold tracking-widest opacity-90 text-center uppercase px-3"
          >
            {currentSlide.subtitle}
          </motion.h4>
        </AnimatePresence>
      </div>
    </div>
  );
}
