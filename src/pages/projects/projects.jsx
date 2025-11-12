import { Link } from "react-router-dom";
import projectsData from "../../context/data/projectsData";
import SectionHeader from "../../components/shared/SectionHeaders/SectionHeader";

export default function AllProjects() {
  const dattaProjects = projectsData.filter(
    (p) => p.brand?.toLowerCase() === "datta"
  );
  const tayefiProjects = projectsData.filter(
    (p) => p.brand?.toLowerCase() === "tayefi"
  );

  return (
    <div className="bg-mainColor text-lightColor min-h-screen px-8 py-6 md:py-16">
      {/* ============= Datta Projects ============= */}
      <div className="mt-20">
        <h2 className="heading font-bold text-center mb-6 md:mb-10">
          <SectionHeader firstWord="Datta Projects" link="/projects?brand=datta" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dattaProjects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="bg-[#333] p-4 rounded-xl overflow-hidden hover:scale-[1.02] transition block"
            >
              <img
                src={p.imgs[0]}
                alt={p.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-3 text-xl">{p.name}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* ============= Tayefi Projects ============= */}
      <div className="mt-4">
        <h2 className="heading font-bold text-center mb-6 md:mb-10">
          <SectionHeader firstWord="Tayefi Projects" link="/projects?brand=tayefi" />
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tayefiProjects.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="bg-[#333] p-4 rounded-xl overflow-hidden hover:scale-[1.02] transition block"
            >
              <img
                src={p.imgs[0]}
                alt={p.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-3 text-xl">{p.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
