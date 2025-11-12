export const slugify = (name) => name.toLowerCase().replace(/\s+/g, "-");

const awardsDetails = [
  {
    img: "/awards/7.webp",
    title: "OSHEANA CONDOMINIUMS, Edmonton, AB",
    year: "2006",
    link: `/projects/${slugify("Osheana Condominiums")}`,
    description:
      "SAM Awards 2006 under 2 categories for Suite Design Types Finalist – SAM Awards 2006 as one of the 2 best Apartments.",
  },
  {
    img: "/awards/3.webp",
    title: "MACKINNON ESTATES, Edmonton, AB",
    link: `/projects/${slugify("CALLAGHAN RAVINES, Edmonton, AB")}`,
    year: "2012",
    description: "The SAM Awards 2011 Finalist Town House Category",
  },
  {
    img: "/awards/2.webp",
    title: "Lexus of Edmonton",
    link: `/projects/${slugify("Lexus of Edmonton")}`,
    year: "2014 - 2015",
    description: "The American Property Awards ,Canada ",
  },
  {
    img: "/awards/1.webp",
    title: "CALLAGHAN RAVINES, Edmonton, AB",
    year: "2014 - 2015",
    link: `/projects/${slugify("CALLAGHAN RAVINES, Edmonton, AB")}`,
    description: "The Americas Property Awards ,Canada",
  },
  {
    img: "/awards/10.webp",
    title: "WALDEN COMMUNITY – SENIOR’S RESIDENCE",
    year: "2015 - 2016",
    link: `/projects/${slugify("The Walden Community – Senior's Residence")}`,
    description:
      "The International Property Awards, in the Architecture Residence Canada ",
  },
  {
    img: "/awards/5.webp",
    title: "MULTI-GENERATIONAL HOUSING (M.G.H.), Calgary, AB",
    link: `/projects/${slugify(
      "Multi-Generational Housing (M.G.H.), Calgary, AB"
    )}`,
    year: "2017 - 2018",
    description: "The Architect Multiple Residence Canada Award ",
  },
];

export default awardsDetails;
