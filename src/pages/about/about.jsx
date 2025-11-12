import MissionVisionSection from "../../components/about/MissionVision/MissionVision";
import AwardsSection from "../../components/about/AwardsSection/AwardsSection";
import OurValues from "../../components/about/OurValues/OurValues";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";

function About() {
  const paragraphs = [
    "Every structure begins with an idea — but true architecture begins with connection.",

    "Datta & Tayefi was born from that connection: two legacies, two philosophies, and two lifelong pursuits of excellence finding harmony in a single vision. What began as independent journeys — Arup Datta Architects Ltd., known for design depth and artistic mastery, and Max Tayefi Architects Ltd., renowned for precision, management, and engineering — evolved into something far greater when their paths converged under one shared purpose",
  ];

  const paragraphs2 = [
    "Their merger was not a coincidence, but a continuation of Mosaic Holding Corporation’s belief that greatness emerges when distinct strengths come together — when creativity meets structure, when vision meets execution, when every piece finds its place in a larger design.",
  ];
  const paragraphs3 = [
    "Today, Datta & Tayefi stands as a reflection of that philosophy — a studio where art and science coexist, where every line tells a story, and where architecture becomes more than form or function.",

    "It becomes dialogue.",

    "It becomes legacy.",
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
        height="h-[77vh] md:h-[65vh]"
      />
      <MissionVisionSection />
      <OurValues />
      <AwardsSection />
    </>
  );
}

export default About;
