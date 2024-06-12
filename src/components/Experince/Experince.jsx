import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getImageUrl } from "../../utils";
import style from "./Experince.module.css";
const Experince = () => {
  return (
    <section className={style.container} id="experince">
      <h2 className={style.title}>Experince</h2>
      <div className={style.content}>
        <div className={style.skills}>
          {skills.map((skills, id) => (
            <div key={id} className={style.skill}>
              <div className={style.skillImageContainer}>
                {" "}
                <img src={getImageUrl(skills.imageSrc)} alt={skills.title} />
              </div>
              <p>{skills.title}</p>
            </div>
          ))}
        </div>
        <ul className={style.history}>
          {history.map((history, id) => (
            <li key={id} className={style.historyItem}>
              <img
                src={getImageUrl(history.imageSrc)}
                alt={`${history.organisation} logo`}
              />
              <div className={style.historyItemDetails}>
                <h3>{`${history.role}, ${history.organisation}`}</h3>
                <p>{`${history.startDate}, ${history.endDate}`}</p>
                <ul>
                  {history.experiences.map((expe, id) => (
                    <li key={id}>{expe}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experince;
