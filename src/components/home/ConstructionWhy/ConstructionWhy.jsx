import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import t1 from "../../../assets/LandingPage/TayefiSlider/1.webp";
import t2 from "../../../assets/LandingPage/TayefiSlider/2.webp";
import t3 from "../../../assets/LandingPage/TayefiSlider/p14.webp";
import d2 from "../../../assets/LandingPage/DattaSlider/home.webp";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

export default function ConstructionWhy() {
  const imagesList = [t1, t2, t3, d2];
  const [images, setImages] = useState(imagesList);

  useEffect(() => {
    const shuffle = () =>
      setImages([...images].sort(() => Math.random() - 0.5));
    const interval = setInterval(shuffle, 3000);
    return () => clearInterval(interval);
  }, []);

  // ✅ محتوى النقاط الجديدة
  const highlights = [
    "Dual Legacy, Unified Vision – Arup Datta’s design mastery meets Tayefi Group’s precision and management excellence.",
    "Architecture That Thinks – Every project is driven by context, emotion, and purpose — not just form.",
    "A-to-Z Project Capability – From vision and planning to engineering and delivery, clients experience one cohesive journey from start to finish.",
    "Global Reach, Local Sensibility – International exposure grounded in regional understanding.",
    "Integrity & Innovation – We design with honesty, curiosity, and the courage to reimagine what’s possible.",
  ];

  return (
    <section className="w-full py-20 bg-mainColor text-lightColor relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center">
        <motion.div layout className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <img
                src={src}
                alt={`Architecture ${i}`}
                className="w-full h-40 md:h-52 object-cover brightness-90 hover:brightness-110 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-mainGold">
            <SectionHeader firstWord="Why Datta & Tayefi" />
          </h2>

          <p className="text-gray-300 leading-relaxed text-lg">
            We don’t just design — we listen, question, and shape ideas into
            spaces with purpose. Every project reflects who we are: two
            legacies, one shared pursuit of intelligent, enduring design.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg italic border-l-2 border-mainGold pl-4">
            What sets us apart:
          </p>

          <ul className="space-y-4 mt-6 text-base md:text-lg">
            {highlights.map((text, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 bg-mainGold rounded-full mt-2 flex-shrink-0"></span>
                <span>{text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
