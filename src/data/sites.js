import Notebook from "../assets/img/sb-344.png";
import Matchup313 from "../assets/img/sw-326.png";
import Employee from "../assets/img/employee-313.png";
import Housing from "../assets/img/housing-335.png";
import Dashboard from "../assets/img/dashboard-478.png";
import Gameshow from "../assets/img/game-736.png";
import Gallery from "../assets/img/gallery-349.png";
import Style from "../assets/img/style-332.png";

const SiteList = [
  {
    siteName: "Online Notebook",
    sum:
      "This is an example of an online interactive notebook that I created for a client. Users create accounts, and their work is saved to a database. The project can be better understood by watching the preview video at the link below.",
    skills: ["React,", "Express,", "Mongo DB,", "Node,", "Sass"],
    img: Notebook,
    site: "https://mighty-anchorage-96945.herokuapp.com/",
    gitHub: "https://github.com/stevejd88/sample-notebook",
    youtube: "https://www.youtube.com/watch?v=WYo1gMCtoh4"
  },
  {
    siteName: "Matchup Game",
    sum:
      "This is a game I built for fun so that I could practice some JavaScript. It is a version of a matching game that I used to enjoy playing as a kid. It is also inspired by one of my favorite movies. I used the Fisher-Yates algorithm to create a new game everytime you play.",
    skills: ["JavaScript,", "HTML,", "CSS"],
    img: Matchup313,
    site: "http://stevenjdeavila.com/js-sandbox/matchup/index.html",
    gitHub: "https://github.com/stevejd88/js-sandbox/tree/master/matchup"
  },
  {
    siteName: "Austin Housing Match",
    sum:
      "A Web App that helps people who qualify find affordable housing. Form submission returns information filtered from an API. I created this web-app at the Women Who Code Hackathon in Oct. 2019 on a team of 3. We won the award for Best Social Impact.",
    skills: ["JavaScript,", "Bootstrap,", "HTML,", "CSS"],
    img: Housing,
    site: "https://social-housing.github.io/affordable-housing-atx/",
    gitHub: "https://github.com/stevejd88/affordable-housing-atx"
  },
  {
    siteName: "Employee Directory",
    sum:
      "This was the final project of my online bootcamp program. I used the fetch method in JavaScript to request 12 random users from a web API. The project also includes a functional search bar, and pop-up modal.",
    skills: ["JavaScript,", "HTML,", "CSS"],
    img: Employee,
    img200: Employee,
    img300: Employee,
    site: "https://stevejd88.github.io/techdegree-project-8/",
    gitHub: "https://github.com/stevejd88/techdegree-project-8"
  },

  {
    siteName: "Web-App Dashboard",
    sum:
      "This was a project from my online bootcamp program. I used CSS grid and flexbox to create a web responisive and interactive web app dashboard. I used the chart.js plugin to display data.",
    skills: ["JavaScript", "Sass", "HTML", "CSS"],
    img: Dashboard,
    site: "https://stevejd88.github.io/techdegree-project-7/",
    gitHub: "https://github.com/stevejd88/techdegree-project-7"
  },
  {
    siteName: "Game Show App",
    sum:
      "A a browser friendly word guessing game created using vanilla JavaScript that populates a random phrase. Then, redesigned the game using CSS transitions. This was a project from my online bootcamp program",
    skills: ["JavaScript,", "HTML,", "CSS"],
    img: Gameshow,
    site: "https://stevejd88.github.io/techdegree-project-6/",
    gitHub: "https://github.com/stevejd88/techdegree-project-6"
  },
  {
    siteName: "Photo Gallery",
    sum:
      "An interactive photo gallery with a popup lightbox using the magnific Pop-Up plugin for jQuery. Also includes a functional search bar using jQuery to filter through pictures. This was a project from my online bootcamp program",
    skills: ["JavaScript,", "jQuery,", "Sass,", "HTML,", "CSS"],
    img: Gallery,
    site: "https://stevejd88.github.io/techdegree-project-5/",
    gitHub: "https://github.com/stevejd88/techdegree-project-5"
  },
  {
    siteName: "Web Style Guide",
    sum:
      "A custom Sass framework to be used in future projects for styling. A mockup was provided, and partials, variables, extends, and mixins were used to match the design for web responsiveness. This was a project from my online bootcamp program",
    skills: ["JavaScript,", "Sass,", "HTML,", "CSS"],
    img: Style,
    site: "https://stevejd88.github.io/techdegree-project-4/",
    gitHub: "https://github.com/stevejd88/techdegree-project-4"
  }
];

export default SiteList;
