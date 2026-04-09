import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import projectsData from "../../context/data/projectsData";
import SectionHeader from "../../components/shared/SectionHeaders/SectionHeader";

export default function CategoryProjects() {
  const { category } = useParams();
  const { search } = useLocation();

  const brand = new URLSearchParams(search).get("brand");

  const [visibleCount, setVisibleCount] = useState(9); // ✅

  const projects = projectsData.filter(
    (p) => p.category === category && p.brand === brand
  );

  // ✅ Reset عند تغيير category أو brand
  useEffect(() => {
    setVisibleCount(9);
  }, [category, brand]);

  return (
    <div className="min-h-screen bg-mainColor text-lightColor p-6 md:p-10">
      
      <h1 className="heading mt-20 mb-4 md:mb-10">
        <SectionHeader
          firstWord={`${category.toUpperCase()} — ${brand.toUpperCase()}`}
        />
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {projects
          .slice(0, visibleCount) // ✅ هنا
          .map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="bg-[#333] p-4 rounded-xl overflow-hidden hover:scale-[1.02] transition"
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

      {/* Show More */}
      {visibleCount < projects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-3 bg-lightColor text-mainColor rounded-lg hover:opacity-90 transition"
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
  );
}