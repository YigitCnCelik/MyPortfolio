 const portafolioData = [
  {
    imgSrc: "../img/portfolio_img/SASS.webp",
    titulo: "ChatBot",
    skills: ["Python", "AWS"],
    descripcion: "Chatbot using Python and AWS serverless architecture.",
    repoURL: "https://github.com/YigitCnCelik/serverless-telegram-bot",
    anim:"fade-up"
  },
  {
    imgSrc: "../img/portfolio_img/alura_geek.webp",
    titulo: "Goals App",
    skills: ["NodeJs", "Docker"],
    descripcion: " Dockerized Node.js application that allows users to set and track their goals.",

    repoURL: "https://github.com/YigitCnCelik/alura-geek",
    anim:"fade-up"
  },
  {
    imgSrc: "../img/portfolio_img//react_org.webp",
    titulo: "Bank App",
    skills: ["SpringBoot", "Jenkins"],
    descripcion: "Simple bank application with CI/CD pipeline using Spring Boot and Jenkins.",
    repoURL: "https://github.com/YigitCnCelik/Bank-App",
    anim:"fade-left"
  },
  {
    imgSrc: "../img/portfolio_img//portfolio.webp",
    titulo: "My Portfolio",
    skills: ["Astro", "React", "JavaScript"],
    descripcion: "Just the repository of my portfolio on GitHub.",
    repoURL: "https://github.com/YigitCnCelik/MyPortfolio",
    anim:"fade-right"
  },
  {
    imgSrc: "../img/portfolio_img/aluraFlix.webp",
    titulo: "E-commerce Backend",
    skills: ["NodeJs", "SQL"],
    descripcion:
      "This project includes a backend system that allows users to register, log in, and place orders for various services on an e-commerce platform.",
    repoURL: "https://github.com/YigitCnCelik/ecommerce-backend",
    anim:"fade-right"
  },
];

 const skillIcons = {
  JavaScript: "skill-icons:javascript",
  React: "skill-icons:react-dark",
  Astro: "skill-icons:astro",
  NodeJs: "logos:nodejs-icon",
  SQL: "tabler:sql",
  Docker: "skill-icons:docker",
  SpringBoot: "devicon:java-wordmark",
  Jenkins: "devicon:jenkins",
  Python: "devicon:python",
  AWS: "skill-icons:aws-light",
  /*  Tailwind: "skill-icons:tailwindcss-dark", */
};

export  {portafolioData,skillIcons}