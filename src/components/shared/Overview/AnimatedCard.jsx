import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedCard({ title, text }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      className="relative min-w-[280px] md:min-w-[340px] rounded-3xl"
    >
      {/*  Main Border  */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>

      {/* ✅ WRAPPER rounded */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
        <motion.span
          variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }}
          animate={isHover ? "hover" : "initial"}
          transition={{ duration: 0.45 }}
          className="origin-left absolute top-0 left-0 h-[2px] w-full bg-lightColor"
        />

        <motion.span
          variants={{ initial: { scaleX: 0 }, hover: { scaleX: 1 } }}
          animate={isHover ? "hover" : "initial"}
          transition={{ duration: 0.45 }}
          className="origin-right absolute bottom-0 right-0 h-[2px] w-full bg-lightColor"
        />

        <motion.span
          variants={{ initial: { scaleY: 0 }, hover: { scaleY: 1 } }}
          animate={isHover ? "hover" : "initial"}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="origin-bottom absolute bottom-0 left-0 w-[2px] h-full bg-lightColor"
        />

        <motion.span
          variants={{ initial: { scaleY: 0 }, hover: { scaleY: 1 } }}
          animate={isHover ? "hover" : "initial"}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="origin-top absolute top-0 right-0 w-[2px] h-full bg-lightColor"
        />
      </div>

      <div className="bg-neutral-900 rounded-3xl p-8 relative z-10">
        <h3 className="text-xl font-semibold mb-4 tracking-wide">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}
