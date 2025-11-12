import ServiceCard from "../../components/Services/ServiceCard";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";

export default function Services() {
  const paragraphs = [
    "Datta & Tayefi offers full-cycle architectural services — from the earliest concept sketches to post-occupancy evaluation.",
  ];
  return (
    <>
      <FirstSectionByVideo title="Services" />
      <DescriptionAbout
        id="services-datta-tayefi"
        firstWord="Services and  "
        secondWord="Industries"
        paragraphs={paragraphs}
        particleColors={["#e0e0d4", "#e0e0d4"]}
        height="h-[22vh] md:h-[35vh]"
      />
      <ServiceCard />
    </>
  );
}
