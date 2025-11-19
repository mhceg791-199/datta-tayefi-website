import LinesBackground from "../shared/LinesBackground/LinesBackground";
import SectionHeader from "../shared/SectionHeaders/SectionHeader";
import Recognition from "./Recognition";

export const ProjectCard = ({
  client,
  subIndustry,
  location,
  status,
  year,
  description,
  awards
}) => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 -mt-20 relative z-20">
      <div
        className="
          bg-mainColor 
          text-gray-200 
          rounded-2xl 
          p-10 md:p-14 
          shadow-[0_0_40px_rgba(0,0,0,0.35)] 
          border border-mainGold/40
          relative
          overflow-hidden
          group
          hover:scale-[1.02] transition
        "
        style={{
          clipPath:
            "polygon(0px 0px, 90% 0px, 100% 26%, 100% 100%, 15% 100%, 0px 84%)",
        }}
      >
        <LinesBackground />

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          {/* LEFT SIDE — INFO */}
          <div className="space-y-4">
            <div className="tracking-wide text-lightColor mb-3">
              <SectionHeader firstWord="Project Information" />
            </div>
            <p className="text-mainGold font-semibold tracking-wide text-lg mt-3">
              By Arup Datta Architect
            </p>
            <p>
              <span className="font-bold text-mainGold">CLIENT:</span> {client}
            </p>
            <p>
              <span className="font-bold text-mainGold">SUB INDUSTRY:</span>{" "}
              {subIndustry}
            </p>
            <p>
              <span className="font-bold text-mainGold">LOCATION:</span>{" "}
              {location}
            </p>
            <p>
              <span className="font-bold text-mainGold">STATUS:</span> {status}
            </p>
            <p>
              <span className="font-bold text-mainGold">YEAR:</span> {year}
            </p>

            <div className="h-[1px] bg-mainGold/30 mt-6"></div>
          </div>

          {/* RIGHT SIDE — DESCRIPTION */}
          <div className="space-y-5 leading-relaxed text-gray-300">
            {description?.map((d, index) => (
              <p key={index}>{d}</p>
            ))}
          </div>
        </div>
      </div>

      <Recognition awards={awards}/>
    </section>
  );
};
