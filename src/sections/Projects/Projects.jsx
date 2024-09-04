import styles from "./ProjectsStyles.module.css";
import Flime from "../../assets/flime.png";
import Calculator from "../../assets/calculator.png";

import Wedding from "../../assets/wedding.png";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Calculator}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Calculator"
          p="Calculator React Website"
        />
        <ProjectCard
          src={Flime}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Flime "
          p="OTT Platform "
        />
        <ProjectCard
          src={Wedding}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Wedding Planner"
          p="Booking Wedding Planner"
        />
      </div>
    </section>
  );
}

export default Projects;
