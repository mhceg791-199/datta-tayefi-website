import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import projectsData from "../../context/data/projectsData";
import SectionHeader from "../../components/shared/SectionHeaders/SectionHeader";

export default function CategoryProjects() {
  const { category } = useParams();

  const { search } = useLocation();
  console.log(category, search);
  const brand = new URLSearchParams(search).get("brand");

  const projects = projectsData.filter(
    (p) => p.category === category && p.brand === brand
  );

  return (
    <div className="min-h-screen bg-mainColor text-lightColor p-6 md:p-10">
      <h1 className="heading mt-20 mb-4 md:mb-10">
        <SectionHeader
          firstWord={`${category.toUpperCase()} — ${brand.toUpperCase()}`}
        />
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="bg-[#333] p-4 rounded-xl overflow-hidden hover:scale-[1.02] transition"
          >
            <img src={p.imgs[0]} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-3 text-xl">{p.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
