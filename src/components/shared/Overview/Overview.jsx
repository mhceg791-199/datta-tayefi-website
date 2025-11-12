import { motion } from "framer-motion";
import LightRays from "./LightRays";
import AnimatedCard from "./AnimatedCard";
import SectionHeader from "../SectionHeaders/SectionHeader";

const cards = [
  {
    title: "100+ Years of Combined Expertise",
    text: "A global portfolio built on trust, design integrity, and human insight — delivering civic, commercial, residential, and cultural landmarks across four continents.",
  },
  {
    title: "1000+ Completed Projects",
    text: "From landmark museums and high-rises to community hubs and theme parks — every project tells a story of transformation and precision.",
  },
  {
    title: "End-to-End Project Delivery",
    text: "Datta & Tayefi leads every stage — from concept to construction — ensuring consistency, quality, and creativity under one roof.",
  },
  {
    title: "Design That Endures",
    text: "Our work balances imagination with functionality — creating architecture that stands the test of time, adapts to its environment, and reflects the human experience at its core.",
  },
];

export default function OverviewSection() {
  return (
    <div className="w-full py-7 md:py-24 px-3 bg-[#333334] text-white relative overflow-hidden">
      {/* ✅ Light rays background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#e0e0d4"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.07}
          distortion={0.03}
          className="absolute inset-0"
        />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 font-bold text-center mb-6 md:mb-12 tracking-wide"
      >
        <SectionHeader firstWord="Overviews" />
      </motion.h2>

      <div className="relative z-10 max-w-8xl mx-auto">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-8 
            place-items-stretch
          "
        >
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="h-full flex">
                <AnimatedCard
                  title={card.title}
                  text={card.text}
                  className="flex flex-col justify-between h-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
