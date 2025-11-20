import MissionVisionSection from "../../components/about/MissionVision/MissionVision";
import AwardsSection from "../../components/about/AwardsSection/AwardsSection";
import OurValues from "../../components/about/OurValues/OurValues";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";

function About() {
  const paragraphs = [
    "Datta & Tayefi is a proud subsidiary of Mosaic Holding Corporation — an investment firm built on the belief that when exceptional forces come together, they create something far more powerful than they ever could alone.",
  ];

  const paragraphs2 = [
    "That belief brought two established names into the Mosaic family. Arup Datta Architects Ltd., known for shaping meaningful, culturally rooted designs across continents.",
    "And Max Tayefi Architect Inc., recognized for its technical strength, precision, and decades of trusted project delivery."
  ];
  const paragraphs3 = [
    "Within Mosaic’s vision of unity and purpose, their convergence felt less like a decision and more like an evolution — a natural alignment of capability, experience, and ambition.",

    "From that alignment, Datta & Tayefi emerged. Not as a simple merge, but as a new powerhouse — strengthened by two proven legacies and guided by Mosaic Holding’s belief that greatness is created when the right pieces come together with intention.",

    "Today, Datta & Tayefi reflects that philosophy: purposeful, unified, and built on the combined strength of firms that have already shaped cities, cultures, and communities around the world.",
  ];

  return (
    <>
      <FirstSectionByVideo title="About US" />
      <DescriptionAbout
        id="about-datta-tayefi"
        firstWord="Our "
        secondWord="Story"
        paragraphs={paragraphs}
        paragraphs2={paragraphs2}
        paragraphs3={paragraphs3}
        particleColors={["#e0e0d4", "#e0e0d4"]}
        height="h-[85vh] md:h-[65vh]"
      />
      <MissionVisionSection />
      <OurValues />
      <AwardsSection />
    </>
  );
}

export default About;
