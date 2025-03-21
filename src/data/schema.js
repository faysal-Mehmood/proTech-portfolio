import profileImageUrl from "../assets/images/profile.webp";
import profile1ImageUrl from "../assets/images/profile1.webp";
import projectThumbnail from "../assets/images/projects/image.webp";
import serviceThumbnail from "../assets/images/services/blog.webp";
export const myPortfolioSchema = {
  heroSection: {
    scrollId: "hero",
    title: "App & Software Developer",
    name: "Robert Miller",

    button: {
      text: "Contact Me",
      link: "#contact-us",
    },
    image: { title: "", sourceUrl: profileImageUrl },
  },
  aboutMe: {
    scrollId: "about",
    label: "About Me",
    heading: "Welcome to my ProTech, Best Software Services",
    subheading:
      "I have 5+ years of experience in Software Development to provide better services.",
    description:
      "With over 5 years of experience, I specialize in building high-performance, scalable, and user-friendly web applications. From intuitive frontend designs to powerful backend systems, I deliver complete, tailored solutions using JavaScript, React, Next.js, Node.js, and more — ensuring seamless functionality and user experiences.",
    experienceYears: "5+",
    image: { sourceUrl: profile1ImageUrl, title: "" },
    achievements: [
      { count: "100+", label: "Projects Completed" },
      { count: "10+", label: "Awards Won" },
      { count: "150+", label: "Happy Clients" },
    ],
  },
  services: {
    scrollId: "service",
    heading: "My Best Services",
    list: [
      {
        dataId: "pro_tech_service",
        title: "Frontend Development",
        category: "website_development",
        description: `  I specialize in creating visually stunning and highly responsive user interfaces using modern frontend technologies like HTML, CSS, JavaScript, and frameworks like React, Angular, and Vue.js. My goal is to deliver seamless user experiences that engage and convert visitors.`,
        icon: "",
        featured_image: { sourceUrl: serviceThumbnail, title: "Serivce Image" },
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: " Text :I focus on delivering pixel-perfect, responsive, and user-friendly frontend solutions.",
          list: [
            "Custom UI/UX design tailored to your brand.",
            "Responsive and mobile-first development",
            " Integration with backend APIs for seamless functionality.",
          ],
        },
        our_approach:
          " I follow a structured process to deliver high-quality frontend solutions: Design,  Development, and Testing.",
        work_process: [
          " Design: Crafting wireframes and prototypes.",
          "Development: Building responsive and interactive interfaces.",
          " Testing: Ensuring cross-browser and device compatibility.",
        ],
      },

      {
        dataId: "pro_tech_service",
        title: "FullStack Developer",
        category: "web_development",
        description:
          "I offer end-to-end web development services, combining frontend and backend expertise to deliver complete web applications. From concept to deployment, I ensure your project is built with the latest technologies and best practices.",
        icon: "", // Add icon URL if available
        featured_image: { sourceUrl: serviceThumbnail, title: "Serivce Image" },
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "I deliver comprehensive web solutions that are scalable, secure, and user-friendly.",
          list: [
            "End-to-end web application development.",
            "Integration of frontend and backend systems.",
            "Deployment and maintenance of web applications.",
          ],
        },
        our_approach:
          "I follow a structured process to deliver high-quality full stack solutions: Planning, Development, and Deployment.",
        work_process: [
          "Planning: Defining project requirements and architecture.",
          "Development: Building and testing the application.",
          "Deployment: Launching and maintaining the application.",
        ],
      },
      {
        dataId: "pro_tech_service",
        title: "Shopify Development",
        category: "ecommerce", // Category added
        description:
          "I create custom Shopify themes that are visually appealing, responsive, and optimized for conversions. Whether you need a new theme or customization of an existing one, I ensure your Shopify store stands out.",
        icon: "", // Add icon URL if available
        featured_image: { sourceUrl: serviceThumbnail, title: "Serivce Image" },
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "I deliver custom Shopify themes that enhance your brand and drive sales.",
          list: [
            "Custom Shopify theme design and development.",
            "Responsive and mobile-friendly layouts.",
            "Integration with Shopify apps and plugins.",
          ],
        },
        our_approach:
          "I follow a structured process to deliver high-quality Shopify solutions: Design, Development, and Testing.",
        work_process: [
          "Design: Crafting wireframes and prototypes.",
          "Development: Building and customizing Shopify themes.",
          "Testing: Ensuring functionality and responsiveness.",
        ],
      },
      {
        dataId: "pro_tech_service",
        title: "Backend Development",
        category: "web_development",
        description: ` I build robust, scalable, and secure backend systems using technologies like Node.js, Python (Django/Flask), PHP (Laravel), and databases like MySQL, MongoDB, and PostgreSQL. My backend solutions ensure your applications run smoothly and efficiently.`,
        icon: "",
        featured_image: { sourceUrl: serviceThumbnail, title: "Serivce Image" },
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "I deliver secure, scalable, and high-performance backend systems.",
          list: [
            ".Custom API development and integration.",
            "Database design and optimization.",
            "Server-side logic and security implementation.",
          ],
        },
        our_approach:
          "I follow a structured process to deliver high-quality backend solutions: Planning, Development, and Deployment.",
        work_process: [
          "Planning: Defining system architecture and requirements",
          " Development: Building and testing backend logic.",
          "Deployment: Launching and maintaining the backend system.",
        ],
      },
      {
        dataId: "wordpress_development",
        title: "WordPress Development",
        category: "web_development", // Category added
        description:
          "I build custom WordPress websites that are fast, secure, and easy to manage. From simple blogs to complex e-commerce sites, I deliver WordPress solutions tailored to your needs.",
        icon: "", // Add icon URL if available
        featured_image: { sourceUrl: serviceThumbnail, title: "Serivce Image" },
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "I deliver custom WordPress websites that are scalable, secure, and user-friendly.",
          list: [
            "Custom WordPress theme and plugin development.",
            "Responsive and mobile-friendly designs.",
            "SEO optimization and performance improvements.",
          ],
        },
        our_approach:
          "I follow a structured process to deliver high-quality WordPress solutions: Planning, Development, and Deployment.",
        work_process: [
          "Planning: Defining project requirements and architecture.",
          "Development: Building and customizing WordPress websites.",
          "Deployment: Launching and maintaining the website.",
        ],
      },
      {
        dataId: "pro_tech_service",
        title: "Ecommerce Development",
        category: "ecommerce", // Category added
        description:
          "I build custom ecommerce websites that are visually stunning, highly functional, and optimized for conversions. Whether you need a Shopify store, WooCommerce site, or a custom ecommerce platform, I deliver solutions that drive sales and grow your business.",
        icon: "", // Add icon URL if available
        featured_image: { sourceUrl: serviceThumbnail, title: "Serivce Image" },
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "I deliver custom ecommerce solutions that are scalable, secure, and user-friendly.",
          list: [
            "Custom ecommerce website design and development.",
            "Integration with payment gateways and shipping APIs.",
            "SEO optimization and performance improvements.",
          ],
        },
        our_approach:
          "I follow a structured process to deliver high-quality ecommerce solutions: Planning, Development, and Deployment.",
        work_process: [
          "Planning: Defining project requirements and architecture.",
          "Development: Building and customizing ecommerce websites.",
          "Deployment: Launching and maintaining the ecommerce platform.",
        ],
      },
      {
        dataId: "pro_tech_service",
        title: "Search Engine Optimization (SEO)",
        category: "digital_marketing", // Category added
        description:
          "I provide comprehensive SEO services to improve your website’s visibility on search engines like Google. From keyword research to on-page and off-page optimization, I help you rank higher and attract more organic traffic.",
        icon: "", // Add icon URL if available
        featured_image: { sourceUrl: serviceThumbnail, title: "Serivce Image" },
        image_gallery: [serviceThumbnail, serviceThumbnail],
        our_capabilties: {
          text: "I focus on delivering measurable SEO results to grow your online presence.",
          list: [
            "Keyword research and analysis.",
            "On-page and off-page optimization.",
            "Technical SEO and performance improvements.",
          ],
        },
        our_approach:
          "I follow a structured process to deliver high-quality SEO solutions: Audit, Optimization, and Monitoring.",
        work_process: [
          "Audit: Analyzing your website’s current performance.",
          "Optimization: Implementing SEO best practices.",
          "Monitoring: Tracking progress and making adjustments.",
        ],
      },
    ],
  },
  digitalTrack: {
    scrollId: "digitalTracker",
    tracks: [
      "I always try to put my best service to my client.",
      "Quality and innovation are at the core of my work.",
      "Client satisfaction is my ultimate goal.",
    ],
  },
  portfolio: {
    scrollId: "portfolio",
    heading: "My Latest Projects",
    projects: [
      {
        dataId: "pro_tech_project",
        category: "Web Design",
        title: "Wordpress Ecommerce Store",
        description: `Origin Mattress UK is a leading sleep technology brand specializing in award-winning mattresses, pillows, toppers, and pet beds. The project involved designing and developing a modern, user-friendly ecommerce platform to showcase their innovative sleep products and enhance the online shopping experience. The website highlights their proprietary sleep technology, customer reviews, and international awards, making it a trusted destination for sleep solutions.`,
        metaFeatures: {
          location: "United Kingdom",
          client: "Origin Mattress UK",
          consult: "M. Talha",
          project_type: "Ecommerce Website",
          duration: "3 Month",
          completion_date: "12 Dec 2024",
          preview: "https://originmattress.co.uk/",
        },
        project_gallery: [
          { sourcelUrl: projectThumbnail, title: "Image 1" },
          { sourceUrl: projectThumbnail, title: "Image 2" },
          { sourceUrl: projectThumbnail, title: "Image 3" },
        ],
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
        project_gallery: [
          { sourcelUrl: projectThumbnail, title: "Image 1" },
          { sourceUrl: projectThumbnail, title: "Image 2" },
          { sourceUrl: projectThumbnail, title: "Image 3" },
        ],
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
        project_gallery: [
          { sourcelUrl: projectThumbnail, title: "Image 1" },
          { sourceUrl: projectThumbnail, title: "Image 2" },
          { sourceUrl: projectThumbnail, title: "Image 3" },
        ],
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
        project_gallery: [
          { sourcelUrl: projectThumbnail, title: "Image 1" },
          { sourceUrl: projectThumbnail, title: "Image 2" },
          { sourceUrl: projectThumbnail, title: "Image 3" },
        ],
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
    scrollId: "testimonials",
    heading: "What My Clients Say",
    list: [
      {
        name: "Umair",
        feedback:
          "Robert did great job. He did everything very professionally and on time I will defiantly hire him again.",
      },
      {
        name: "Dawood Asjad",
        feedback:
          "Robert is very professional in his work and he understand the requirements very well and then implemented well. I will defiantly hire him again",
      },
      {
        name: "Sarah Connor",
        feedback:
          "Robert is a dedicated professional who prioritizes client needs, tackles complex challenges, and ensures clear, effective results. Highly recommended!",
      },
      {
        name: "Michael Smith",
        feedback:
          "Robert is an incredible, budget-friendly developer with deep expertise. He supports and guides teams to create top-notch websites, making him a valuable, long-term asset. Highly recommended.",
      },
    ],
  },
  blog: {
    scrollId: "blog",
    heading: "Latest Blog Posts",
    posts: [], // Placeholder for blog posts
  },
  pricing: {
    scrollId: "pricing",
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
  contactUs: {},
  footer: {
    scrollId: "footer",
    socialLinks: [
      { platform: "Facebook", url: "#", icon: "" },
      { platform: "Instagram", url: "#", icon: "" },
      { platform: "LinkedIn", url: "#", icon: "" },
      { platform: "Twitter", url: "#", icon: "" },
    ],
  },
};
