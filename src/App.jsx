import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Layout from "./Layout";
import About from "./pages/about/about";
import Projects from "./pages/projects/projects";
import ProjectsDetails from "./pages/projectsDetails/projectsDetails";
import LandingPage from "./pages/LandingPage/LandingPage";
import CategoryProjects from "./pages/ProjectCategory/ProjectCategory";
import ScrollToTopButton from "./components/shared/ScrollToTopButton/ScrollToTopButton";
import Services from "./pages/Services/Services";
import ProjectsFilter from "./pages/projects/ProjectsFilter";
import Career from "./pages/Career/Career";
import ContactUs from "./pages/ContactUs/ContactUs";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";

function App() {
  return (
    <>
      <Routes>
        {/* LandingPage */}
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
                <Route path="projects" element={<ProjectsFilter />} />
                <Route path="all-projects" element={<Projects />} />
                <Route path="projects/:slug" element={<ProjectsDetails />} />
                <Route
                  path="projects/category/:category"
                  element={<CategoryProjects />}
                />
                <Route path="people" element={<Career />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="terms" element={<Terms />} />
                <Route path="privacy" element={<Privacy />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

export default App;