import ProjectCart from "./ProjectCart";
import projectsData from "../../Data/projects.json";
import style from './project.module.css'
const Project = () => {
  return (
    <section className={style.container} id="projects">
      <h2 className={style.title}>Projects and Work Demo</h2>
      <div className={style.projects}>
        {projectsData.map((project, index) => {
          return <ProjectCart key={index} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
