import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesDetails } from "../../data/services";
import SectionHeader from "../shared/SectionHeaders/SectionHeader";
import LinesBackground from "../shared/LinesBackground/LinesBackground";

export default function ServiceCard() {
  return (
    <section className="pt-8 pb-8 overflow-hidden bg-mainColor">
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="heading font-bold text-mainGold"
        >
          <SectionHeader firstWord="Our Services" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lightColor mt-4 max-w-2xl mx-auto"
        >
          We Craft Environments That Inspire, Transform, and Endure.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-6 md:px-20">
        {servicesDetails.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/`}
              className="relative group rounded-xl overflow-hidden shadow-lg block"
            >
              <div className="overflow-hidden relative">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Overlay  */}
                <div className="absolute inset-0 bg-mainColor/40 z-10"></div>
                <LinesBackground />
              </div>

              <div
                className="absolute inset-0 bg-mainColor/90 z-20
                            opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
              >
                <h3 className="text-2xl font-semibold text-mainGold uppercase">
                  {s.name}
                </h3>
                <p className="text-lightColor mt-2 paragraph">{s.text}</p>
                <LinesBackground />
              </div>

              <div className="absolute bottom-5 left-5 z-30 group-hover:opacity-0 transition-all duration-400">
                <h3 className="text-xl font-semibold text-lightColor drop-shadow-lg uppercase">
                  {s.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      {/* <div className="text-center mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/projects"
            className="px-8 py-3 bg-mainGold text-black font-semibold rounded-full shadow-lg hover:bg-yellow-500 transition"
          >
            Explore Our Projects →
          </Link>
        </motion.div>
      </div> */}
    </section>
  );
}
