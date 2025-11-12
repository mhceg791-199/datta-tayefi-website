import { useParams } from "react-router-dom";
import projectsData from "../../context/data/projectsData";
import HeroDetails from "../../components/projectsDetails/HeroDetails";
import { ProjectCard } from "../../components/projectsDetails/ProjectCard";
import GalleryDetails from "../../components/projectsDetails/GalleryDetails";

export default function ProjectsDetails() {
  const { slug } = useParams();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project)
    return <div className="p-20 text-center">Project Not Found</div>;

  const {
    description,
    year,
    location,
    status,
    client,
    subIndustry,
    industry,
    imgs,
    name,
  } = project;

  return (
    <div className="w-full min-h-screen bg-lightColor text-mainColor">
      <HeroDetails img={imgs[0]} name={name} industry={industry} />
      <ProjectCard
        client={client}
        subIndustry={subIndustry}
        location={location}
        status={status}
        year={year}
        description={description}
      />
      <GalleryDetails imgs={imgs} />

      <div className="h-20"></div>
    </div>
  );
}
