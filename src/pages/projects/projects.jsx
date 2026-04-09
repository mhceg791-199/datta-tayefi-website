import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import projectsData from "../../context/data/projectsData";
import SectionHeader from "../../components/shared/SectionHeaders/SectionHeader";

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const [visibleDatta, setVisibleDatta] = useState(9); // ✅
  const [visibleTayefi, setVisibleTayefi] = useState(9); // ✅

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter(
          (p) => p.brand?.toLowerCase() === activeFilter.toLowerCase()
        );

  const dattaProjects = filteredProjects.filter(
    (p) => p.brand?.toLowerCase() === "datta"
  );

  const tayefiProjects = filteredProjects.filter(
    (p) => p.brand?.toLowerCase() === "tayefi"
  );

  useEffect(() => {
    setVisibleDatta(9);
    setVisibleTayefi(9);
  }, [activeFilter]);

  return (
    <div className="bg-mainColor text-lightColor min-h-screen px-8 py-6 md:py-16">
      
      {/* Title */}
      <h1 className="heading font-bold text-center mt-20 md:mt-12 mb-6">
        <SectionHeader firstWord="All Projects" />
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {["all", "datta", "tayefi"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveFilter(type)}
            className={`px-6 py-2 rounded-full border transition-all duration-300 capitalize
              ${
                activeFilter === type
                  ? "bg-lightColor text-mainColor font-semibold"
                  : "border-lightColor/40 hover:bg-lightColor/10"
              }`}
          >
            {type === "all"
              ? "All"
              : type === "datta"
              ? "Datta Projects"
              : "Tayefi Projects"}
          </button>
        ))}
      </div>

      {/* ================= Datta ================= */}
      {(activeFilter === "all" || activeFilter === "datta") &&
        dattaProjects.length > 0 && (
          <div className="mt-6">
            <h2 className="heading font-bold text-center md:mb-5">
              <SectionHeader firstWord="Datta Projects" />
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {dattaProjects
                .slice(0, visibleDatta) // ✅
                .map((p) => (
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

            {/* Show More Datta */}
            {visibleDatta < dattaProjects.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisibleDatta((prev) => prev + 6)}
                  className="px-6 py-2 bg-lightColor text-mainColor rounded-lg"
                >
                  Show More Projects
                </button>
              </div>
            )}
          </div>
        )}

      {/* ================= Tayefi ================= */}
      {(activeFilter === "all" || activeFilter === "tayefi") &&
        tayefiProjects.length > 0 && (
          <div className="mt-6">
            <h2 className="heading font-bold text-center md:mb-5">
              <SectionHeader firstWord="Tayefi Projects" />
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tayefiProjects
                .slice(0, visibleTayefi) // ✅
                .map((p) => (
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

            {/* Show More Tayefi */}
            {visibleTayefi < tayefiProjects.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisibleTayefi((prev) => prev + 6)}
                  className="px-6 py-2 bg-lightColor text-mainColor rounded-lg"
                >
                  Show More Projects
                </button>
              </div>
            )}
          </div>
        )}
    </div>
  );
}