import { useLocation } from "react-router-dom";
import projectsData from "../../context/data/projectsData";
import SectionHeader from "../../components/shared/SectionHeaders/SectionHeader";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProjectsFilter() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const brand = params.get("brand"); 

  const filteredProjects = projectsData.filter(
    (p) => p.brand?.toLowerCase() === brand?.toLowerCase()
  );

  const categories = [...new Set(filteredProjects.map((p) => p.category))];

  const [activeCategory, setActiveCategory] = useState("all");

  const projectsToShow =
    activeCategory === "all"
      ? filteredProjects
      : filteredProjects.filter((p) => p.category === activeCategory);
 
  const uniqueCategories = [...new Set(projectsToShow.map((p) => p.category))];

  return (
    <div className="bg-mainColor text-lightColor min-h-screen px-8 py-6 md:py-16">
      <h1 className="heading font-bold text-center mt-20 mb-4">
        <SectionHeader
          firstWord={brand === "datta" ? "Datta Projects" : "Tayefi Projects"}
        />
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-5 py-2 rounded-full border 
            ${
              activeCategory === "all"
                ? "bg-lightColor text-mainColor"
                : "border-lightColor/40"
            }
          `}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border capitalize
              ${
                activeCategory === cat
                  ? "bg-lightColor text-mainColor"
                  : "border-lightColor/40"
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-14 max-w-6xl mx-auto">
        {uniqueCategories.map((cat, index) => {
          const catImg = filteredProjects.find((p) => p.category === cat)
            ?.imgs[0];

          return (
            <Link
              key={index}
              to={`/projects/category/${cat}?brand=${brand}`}
              className="relative h-[210px] md:h-[350px] overflow-hidden group border border-lightColor/10"
            >
              <img
                src={catImg}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500"
              />

              <div
                className="absolute inset-0 bg-mainColor/60 backdrop-blur-sm 
                opacity-0 group-hover:opacity-100 
                transition-all duration-500 z-10"
              ></div>

              <div
                className="absolute inset-0 z-20 flex items-center justify-center 
                opacity-0 group-hover:opacity-100 
                transition-all duration-500"
              >
                <h2 className="text-3xl md:text-4xl tracking-wide font-semibold">
                  {cat.toUpperCase()}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
