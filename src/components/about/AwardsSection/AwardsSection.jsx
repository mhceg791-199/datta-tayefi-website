import { useState } from "react";
import awardsDetails from "../../../data/awardsDetails";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AwardsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full min-h-screen bg-lightColor text-mainColor flex">
      
      <div className="w-full md:w-1/2 p-10 space-y-12">
        
        <div className="font-bold mb-10">
          <SectionHeader firstWord="Awards" />
        </div>

        <div className="space-y-10">
          {awardsDetails.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              className="cursor-pointer group border-b border-mainColor/20 pb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link to={item.link}>
                <h2 className="heading-2 transition-all duration-300 group-hover:text-mainGold">
                  {item.title}
                </h2>

                <p className="text-mainGold/80 font-semibold mt-1">
                  {item.year}
                </p>

              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="hidden md:block w-1/2 h-screen sticky top-0 relative overflow-hidden">

        <img
          src={awardsDetails[active].img}
          alt="Award Preview"
          className="w-full h-full object-cover transition-all duration-700 scale-105"
        />

        <div className="absolute inset-0 bg-mainColor/60 backdrop-blur-sm"></div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute bottom-28 left-10 text-white max-w-sm"
        >
          <h3 className="text-3xl font-semibold tracking-wide text-mainGold mb-3">
            {awardsDetails[active].title}
          </h3>

          <div className="h-[2px] w-20 bg-mainGold mb-4"></div>

          <p className="text-gray-200 leading-relaxed">
            {awardsDetails[active].description}
          </p>

          <p className="mt-3 text-lightColor/80 font-medium">
            {awardsDetails[active].year}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
