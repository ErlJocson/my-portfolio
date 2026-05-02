import { TiDownload, TiDeviceDesktop, TiThLarge } from "react-icons/ti";

export const projects = [
  {
    title: "Survival Analysis of Dropouts",
    subtitle:
      "Identifying significant predictors of student dropouts at Laguna State Polytechnic University",
    icon: TiDownload,
    contents: [
      "As part of the academic requirements of Laguna State Polytechnic University, I am required to conduct a research study. For this, I proposed a project titled Survival Analysis of Student Dropouts.",
      "The number of students dropping out of school is a serious worry. Dropout students have serious penalties and students who decide to drop out of school encounter fewer job opportunities and lower salaries.",
      "This study aims to examine dropout patterns in my previous university and identify the significant factors associated with student attrition. Using survival analysis techniques, the project seeks to quantify the time-to-dropout behavior and determine which variables most strongly influence the likelihood of students discontinuing their studies.",
      "A lot of things were learned throughout the entire duration of this study. The process was both challenging and enjoyable, especially because many of the concepts had to be learned from scratch with minimal guidance. While my professors served as consultants for the project, much of the learning came through independent exploration, problem-solving, and hands-on experience. Despite the difficulties encountered along the way, the study became a rewarding experience that strengthened both my knowledge and skills.",
    ],
  },

  {
    title: "Portfolio Development",
    subtitle:
      "Built a React-based portfolio showcasing frontend development and applied data science projects",
    icon: TiDeviceDesktop,
    contents: [
      "To ensure that my skills remain relevant in a rapidly evolving industry, I decided to create this platform as both a portfolio and a personal challenge. Beyond showcasing my projects and experiences, this platform serves as a way to continuously push myself to improve and adapt. It motivates me to consistently learn new technologies, strengthen my analytical thinking, and refine my technical abilities not only in Data Analytics and Data Science, but also in software and web development. Building this platform allowed me to combine technical knowledge with creativity, problem-solving, and practical implementation in a real-world project.",
      "This entire platform was developed using React (JavaScript) and deployed through GitHub Pages. Developing it from the ground up gave me hands-on experience in frontend development, component-based architecture, responsive design, deployment workflows, and maintaining a production-ready application. More importantly, it reflects my belief that continuous learning and building are essential for growth in the field of technology and data.",
      "This entire platform, in the future, will become a some sort of truth to my online presence. All of my projects or volunteers that i will conduct in the future and the past will be included in this platform. This is to make sure that recruiters or other companies will easily see my capabilities in terms of Data and Development.",
    ],
  },

  {
    title: "Cluster Analysis for Targeted Improvement",
    subtitle:
      "Framework for using clustering techniques to guide targeted improvement strategies",
    icon: TiThLarge,
    contents: [
      "At first, i don't see the value of cluster analysis for the business. But, when i started working with my team in Maxicare i realized the true value of cluster analysis. It is really a high level tool used for making informed decisions and targeted improvements.",
      "The main reason i did not see the true value of cluster analysis is due to the garbage academic projects that i had seen. People would run k-means, get 4 colored clusters, then invent stories. It was not an analysis, that is pattern cosplay.",
      "So where do cluster analysis shines? This is really valueable when you have a lot of objects (this can be persons, clients, contact center agents, etc.) where you can measure their characteristics or performance. Cluster analysis is used to identify if there is a natural behavioral pattern hidden in your data.",
      "Cluster created groups with similar behavior so you can; generalize efficienctly, target interventions, allocate resources, personalize actions, and simplify strategy.",
    ],
  },
];
