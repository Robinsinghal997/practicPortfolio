import style from "./ProjectCart.module.css";

import { getImageUrl } from "../../utils";

const ProjectCart = ({project}) => {
  return (
    <div className={style.container}>
      <img src={getImageUrl(project.imageSrc)} alt={project.title} />
      <h3 className={style.title}>{project.title}</h3>
      <p className={style.description}>{project.description}</p>
      <ul className={style.skills}>
        {project.skills.map((skill, index) => (
          <li className={style.skill} key={index}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={style.links}>
        <a className={style.link} href={project.demo}>
          Demo
        </a>
        <a className={style.link} href={project.source}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCart;
