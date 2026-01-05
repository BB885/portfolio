export const COPY = {
  en: {
    topLocation: "Québec",
    toggleBtn: "FR",
    name: "Ben Bouhdana",
    headline: "Software Engineering Student",
    subtitle:
      "I build and deploy full-stack applications with React and Python, focusing on clean architecture, production deployment, and real-world problem solving.",

    aboutTitle: "About",
    aboutBody:
      "I’m passionate about problem solving and learning something new every day. I enjoy building practical projects that sharpen my full-stack skills and help me understand how real systems behave in production. As a proud Canadian, I’m also a Habs fan through and through.",

    projectsTitle: "Projects",

    projects: [
      {
        title: "Internship Application Tracker",
        description:
          "Full-stack application for tracking internship applications, built with React, FastAPI, and SQLite. Implements inline editing, filtering and sorting, analytics with chart visualization, and PDF export. Deployed with a React frontend on Vercel and a FastAPI backend on Render.",
        liveText: "Demo",
        githubText: "GitHub",
        hint: "Deployed with CI/CD via GitHub + Vercel & Render",
        tags: ["React", "FastAPI", "SQLite", "Vercel", "Render"],
        liveUrlKey: "tracker",
        githubUrl: "https://github.com/BB885/Job-Application-Tracker",
      },
      {
        title: "Hockey Odds Calculator",
        description:
          "Python-based tool that computes hockey win probabilities using aggregated data from external APIs. Includes data cleaning and a probability model to generate implied odds.",
        liveText: "Demo",
        githubText: "GitHub",
        hint: "Data parsing + probability modeling in Python",
        tags: ["Python", "APIs", "Data Cleaning"],
        liveUrlKey: "hockey",
        githubUrl: "https://github.com/BB885/hockey-odds-calculator",
      },
    ],

    languagesTitle: "Languages",
    techTitle: "Tech",
    footer: "©",
  },

  fr: {
    topLocation: "Québec",
    toggleBtn: "EN",
    name: "Ben Bouhdana",
    headline: "Étudiant en génie logiciel",
    subtitle:
      "Je conçois et déploie des applications full-stack avec React et Python, avec un focus sur l’architecture, le déploiement en production et la résolution de problèmes concrets.",

    aboutTitle: "À propos",
    aboutBody:
      "Je suis passionné par la résolution de problèmes et j’aime apprendre quelque chose de nouveau chaque jour. J’aime construire des projets pratiques qui renforcent mes compétences full-stack et m’aident à comprendre le comportement des systèmes en production. En tant que fier Canadien, je suis aussi un grand partisan des Canadiens de Montréal.",

    projectsTitle: "Projets",

    projects: [
      {
        title: "Suivi de candidatures de stage",
        description:
          "Application full-stack pour suivre des candidatures, construite avec React, FastAPI et SQLite. Inclut l’édition en ligne, le filtrage et le tri, des analyses avec graphique, et l’export PDF. Déployée avec un frontend React sur Vercel et un backend FastAPI sur Render.",
        liveText: "Démo",
        githubText: "GitHub",
        hint: "Déployé avec CI/CD via GitHub + Vercel & Render",
        tags: ["React", "FastAPI", "SQLite", "Vercel", "Render"],
        liveUrlKey: "tracker",
        githubUrl: "https://github.com/BB885/Job-Application-Tracker",
      },
      {
        title: "Calculateur de cotes (hockey)",
        description:
          "Outil Python qui calcule des probabilités de victoire à partir de données agrégées via des API. Inclut le nettoyage des données et un modèle de probabilités simple pour produire des cotes.",
        liveText: "Démo",
        githubText: "GitHub",
        hint: "Analyse de données + modèle de probabilités en Python",
        tags: ["Python", "API", "Nettoyage de données"],
        liveUrlKey: "hockey",
        githubUrl: "https://github.com/BB885/hockey-odds-calculator",
      },
    ],

    languagesTitle: "Langues",
    techTitle: "Technos",
    footer: "©",
  },
};
