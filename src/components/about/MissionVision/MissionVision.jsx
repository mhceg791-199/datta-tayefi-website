import { motion } from "framer-motion";

export default function MissionVisionSection() {
  const card = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section className="w-full py-10 md:py-24 bg-mainColor text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none">
        <div className="w-[300px] h-[300px] border-2 border-lightColor rotate-45 absolute -top-10 -left-20"></div>
        <div className="w-[300px] h-[300px] border-2 border-lightColor rotate-6 absolute -top-10 -left-20"></div>
        <div className="w-[200px] h-[200px] border-2 border-lightColor rotate-12 absolute bottom-10 right-2"></div>
        <div className="w-[200px] h-[200px] border-2 border-lightColor rotate-45 absolute bottom-10 right-2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-24 relative z-20">
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          <p className="text-gray-300 leading-relaxed max-w-[46rem]">
            To lead every project from concept to completion — from the first
            sketch to the final sign-off. We design, manage, and innovate with
            purpose, turning complex ideas into spaces that are functional,
            beautiful, and unlike anything else.
          </p>

          <h2 className="text-mainGold text-3xl font-bold tracking-wide">
            MISSION
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.7 }}
            className="h-[3px] bg-mainGold"
          />
        </motion.div>

        {/* ✅ VISION */}
        <motion.div
          variants={card}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4 text-right ml-auto max-w-4xl"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.7 }}
            className="h-[2px] bg-mainGold ml-auto mb-2"
          />
          <h2 className="text-mainGold text-3xl font-bold tracking-wide">
            VISION
          </h2>

          <p className="text-gray-300 leading-relaxed max-w-[47rem] ml-auto">
            To be the partner clients choose when they want to create what
            doesn’t yet exist. We see architecture as a journey of
            transformation — where bold thinking, advanced technology, and human
            insight build structures that truly stand apart.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
