import profileImageUrl from "../assets/images/profile.webp";
import profile1ImageUrl from "../assets/images/profile1.webp";
import projectThumbnail from "../assets/images/projects/image.webp";
import serviceThumbnail from "../assets/images/services/blog.webp";
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
        dataId: "pro_tech_service",
        title: "Website Design",
        category: "website",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.
Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.`,
        icon: "",
        featured_image: serviceThumbnail,
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam",
          list: [
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
          ],
        },
        our_approach:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
        work_process: [
          "lroem ipsum",
          "lorem, ipsum",
          "Non saed velit dictum quam risus pharetra esta.",
        ],
      },
      {
        dataId: "pro_tech_service",
        title: "Website Design",
        category: "website",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.
Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.`,
        icon: "",
        featured_image: serviceThumbnail,
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam",
          list: [
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
          ],
        },
        our_approach:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
        work_process: [
          "lroem ipsum",
          "lorem, ipsum",
          "Non saed velit dictum quam risus pharetra esta.",
        ],
      },
      {
        dataId: "pro_tech_service",
        title: "Website Design",
        category: "website",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.
Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.`,
        icon: "",
        featured_image: serviceThumbnail,
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam",
          list: [
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
          ],
        },
        our_approach:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
        work_process: [
          "lroem ipsum",
          "lorem, ipsum",
          "Non saed velit dictum quam risus pharetra esta.",
        ],
      },
      {
        dataId: "pro_tech_service",
        title: "Website Design",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.
Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.`,
        icon: "",
        featured_image: serviceThumbnail,
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam",
          list: [
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
          ],
        },
        our_approach:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
        work_process: [
          "lroem ipsum",
          "lorem, ipsum",
          "Non saed velit dictum quam risus pharetra esta.",
        ],
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
        dataId: "pro_tech_project",
        category: "Web Design",
        title: "Business Website Design",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non.
Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam`,
        metaFeatures: {
          location: "London",
          client: "wpOceans",
          consult: "Harry Johnson",
          project_type: "React",
          duration: "6 Month",
          completion_date: "15 Apr 2025",
          preview: "www.google.com",
        },
        project_gallery: [projectThumbnail, projectThumbnail, projectThumbnail],
        our_Strategies: {
          text: "Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.",
          list: [
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
          ],
        },
        client_feedback:
          "Amazing looking theme and instantly turns your application into a great looking one. Really shows that pro_ fessionals built this theme up. Very happy with the way the theme looks .",
        client_name: "Robert Mikey",
        our_approach:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
        feature_image: { sourceUrl: projectThumbnail, title: "" },
      },
      {
        dataId: "pro_tech_project",
        category: "Web Design",
        title: "Business Website Design",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non.
Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam`,
        metaFeatures: {
          location: "London",
          client: "wpOceans",
          consult: "Harry Johnson",
          project_type: "React",
          duration: "6 Month",
          completion_date: "15 Apr 2025",
          preview: "www.google.com",
        },
        project_gallery: [projectThumbnail, projectThumbnail, projectThumbnail],
        our_Strategies: {
          text: "Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.",
          list: [
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
          ],
        },
        client_feedback:
          "Amazing looking theme and instantly turns your application into a great looking one. Really shows that pro_ fessionals built this theme up. Very happy with the way the theme looks .",
        client_name: "Robert Mikey",
        our_approach:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
        feature_image: { sourceUrl: projectThumbnail, title: "" },
      },
      {
        dataId: "pro_tech_project",
        category: "Web Design",
        title: "Business Website Design",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non.
Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam`,
        metaFeatures: {
          location: "London",
          client: "wpOceans",
          consult: "Harry Johnson",
          project_type: "React",
          duration: "6 Month",
          completion_date: "15 Apr 2025",
          preview: "www.google.com",
        },
        project_gallery: [projectThumbnail, projectThumbnail, projectThumbnail],
        our_Strategies: {
          text: "Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.",
          list: [
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
          ],
        },
        client_feedback:
          "Amazing looking theme and instantly turns your application into a great looking one. Really shows that pro_ fessionals built this theme up. Very happy with the way the theme looks .",
        client_name: "Robert Mikey",
        our_approach:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
        feature_image: { sourceUrl: projectThumbnail, title: "" },
      },
      {
        dataId: "pro_tech_project",
        category: "Web Design",
        title: "Business Website Design",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non.
Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam`,
        metaFeatures: {
          location: "London",
          client: "wpOceans",
          consult: "Harry Johnson",
          project_type: "React",
          duration: "6 Month",
          completion_date: "15 Apr 2025",
          preview: "www.google.com",
        },
        project_gallery: [projectThumbnail, projectThumbnail, projectThumbnail],
        our_Strategies: {
          text: "Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.",
          list: [
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
            "Non saed velit dictum quam risus pharetra esta.",
          ],
        },
        client_feedback:
          "Amazing looking theme and instantly turns your application into a great looking one. Really shows that pro_ fessionals built this theme up. Very happy with the way the theme looks .",
        client_name: "Robert Mikey",
        our_approach:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.",
        feature_image: { sourceUrl: projectThumbnail, title: "" },
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
