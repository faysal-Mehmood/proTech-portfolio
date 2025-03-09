import Profile from "../../assets/images/profile.webp";
import aboutProfile from "../../assets/images/profile1.webp";
export const myPortfolioSchema = {
  heroProfile: {
    title: "App & Software Developer",
    name: "Robert Miller",
    button: {
      link: "#contact-us",
      title: "Contact Me",
    },
    image: Profile,
  },
  aboutMe: {
    label: "About Me",
    heading: "Welcome to Tonu, Best Software Services",
    subheading:
      "I have 8+ years of experiences in Software Development for give you better services.",
    paragraph:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite",
    exp: "8+",
    image: aboutProfile,
    achievements: [
      { count: "500+", label: "Projects Completed" },
      { count: "52+", label: "Awards win" },
      { count: "2M+", label: "Happy Clients" },
    ],
  },
  ourServices: {},
  latestProjects: {},
  testonomials: {},
  blogs: {},
  pricings: {},
  footer: {},
};
