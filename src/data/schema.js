import profileImageUrl from "../assets/images/profile.webp";
import profile1ImageUrl from "../assets/images/profile1.webp";
import projectThumbnail from "../assets/images/image.webp";
export const myPortfolioSchema = {
  heroSection: {
    title: "App & Software Developer",
    name: "Robert Miller",
    button: {
      text: "Contact Me",
      link: "#contact-us",
    },
    image: { title: "", sourceUrl: profileImageUrl },
  },
  aboutMe: {
    label: "About Me",
    heading: "Welcome to Tonu, Best Software Services",
    subheading:
      "I have 8+ years of experience in Software Development to provide better services.",
    description:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring, which I enjoy with my whole heart...",
    experienceYears: "8+",
    image: { sourceUrl: profile1ImageUrl, title: "" },
    achievements: [
      { count: "500+", label: "Projects Completed" },
      { count: "52+", label: "Awards Won" },
      { count: "2M+", label: "Happy Clients" },
    ],
  },
  services: {
    heading: "My Best Services",
    list: [
      {
        title: "Website Design",
        description: "Creating beautiful and functional websites.",
        icon: "",
      },
      {
        title: "Mobile App Design",
        description: "Designing intuitive mobile applications.",
        icon: "",
      },
      {
        title: "Brand Identity",
        description: "Crafting strong brand identities.",
        icon: "",
      },
      {
        title: "Market Analysis",
        description: "Providing insightful market research.",
        icon: "",
      },
    ],
  },
  digitalTrack: {
    tracks: [
      "I always try to put my best service to my client.",
      "I always try to put my best service to my client.",
      "I always try to put my best service to my client.",
    ],
  },
  portfolio: {
    heading: "My Latest Projects",
    projects: [
      {
        title: "Business Website Design",
        category: "Web Design",
        image: { sourceUrl: projectThumbnail, title: "" },
      },
      {
        title: "E-commerce App",
        category: "App Development",
        image: { sourceUrl: projectThumbnail, title: "" },
      },
      {
        title: "Marketing Dashboard",
        category: "UI/UX Design",
        image: { sourceUrl: projectThumbnail, title: "" },
      },
      {
        title: "Startup Branding",
        category: "Branding",
        image: { sourceUrl: projectThumbnail, title: "" },
      },
    ],
  },
  testimonials: {
    heading: "What My Clients Say",
    list: [
      {
        name: "Elizabeth",
        feedback:
          "Working with Robert was an amazing experience. Highly recommended!",
      },
      {
        name: "John Doe",
        feedback: "Great attention to detail and top-notch development skills.",
      },
      {
        name: "Sarah Connor",
        feedback: "Delivered my project ahead of schedule with high quality.",
      },
      {
        name: "Michael Smith",
        feedback: "Excellent communication and problem-solving skills.",
      },
    ],
  },
  blog: {
    heading: "Latest Blog Posts",
    posts: [], // Placeholder for blog posts
  },
  pricing: {
    heading: "My Pricing Plan",
    plans: [
      {
        plantype: "Basic",
        ratePerHour: "$0,0",
        text: "Consectetur adipiscing elit. Purusout phasellus.",
        features: [
          "Web App design",
          "Software Development",
          "3D Animation Add",
          "Web Development",
          "Graphic Design",
        ],
        button: {
          text: "Choose plan",
          link: "#",
        },
      },
      {
        plantype: "Medium",
        ratePerHour: "$0,00",
        text: "Consectetur adipiscing elit. Purusout phasellus.",
        features: [
          "Web App design",
          "Software Development",
          "3D Animation Add",
          "Web Development",
          "Graphic Design",
        ],
        button: {
          text: "Choose plan",
          link: "#",
        },
      },
      {
        plantype: "Premium",
        ratePerHour: "$0,00",
        text: "Consectetur adipiscing elit. Purusout phasellus.",
        features: [
          "Web App design",
          "Software Development",
          "3D Animation Add",
          "Web Development",
          "Graphic Design",
        ],
        button: {
          text: "Choose plan",
          link: "#",
        },
      },
    ], // Placeholder for pricing plans
  },
  footer: {
    socialLinks: [
      { platform: "Facebook", url: "#", icon: "" },
      { platform: "Instagram", url: "#", icon: "" },
      { platform: "LinkedIn", url: "#", icon: "" },
      { platform: "Twitter", url: "#", icon: "" },
    ],
  },
};
