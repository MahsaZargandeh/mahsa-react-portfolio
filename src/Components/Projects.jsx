import IMDBClone from "../assets/images/IMDB Clone.png";
import Car from "../assets/images/Car.png";
import Golestan from "../assets/images/Golestan.png";

import Starbucks from "../assets/images/Starbucks.png";
import Sumsung from "../assets/images/Sumsung.png";
import WeatherApp from "../assets/images/Weather App.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "IMDB Clone",
    image: IMDBClone,
    description: "A movie application built with React and TMDB API.",
    tech: "React | API | React Router",
    github: "https://github.com/MahsaZargandeh",
    demo: "#",
  },

  {
    title: "Weather App",
    image: WeatherApp,
    description: "A weather application built with React and API integration.",
    tech: "React | JavaScript | API",
    github: "https://github.com/MahsaZargandeh",
    demo: "#",
  },

  {
    title: "Starbucks Landing Page Clone",
    image: Starbucks,
    description: "A weather application built with React and API integration.",
    tech: "React | API | CSS",
    github: "https://github.com/MahsaZargandeh",
    demo: "#",
  },

  {
    title: "Golestan",
    image: Golestan,
    description: "A weather application built with React and API integration.",
    tech: "React | API | CSS",
    github: "https://github.com/MahsaZargandeh",
    demo: "#",
  },

  {
    title: "Sumsung Landing Page",
    image: Sumsung,
    description: "A responsive Sumsung landing page.",
    tech: "HTML | CSS | JavaScript",
    github: "https://github.com/MahsaZargandeh",
    demo: "#",
  },

  {
    title: "Car Spare Parts Website",
    image: Car,
    description: "A responsive car spare parts website.",
    tech: "React | Tailwind | Swiper",
    github: "https://github.com/MahsaZargandeh",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <span>{project.tech}</span>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
