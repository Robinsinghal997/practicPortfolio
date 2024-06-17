import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import data from "../../Data/hero.json";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl(data.about.SideImage)}
          alt="me Sitting with the laptop"
        />
        <ul className={styles.aboutItems}>
          {data.about.aboutItems.map((item, index) => (
            <li key={index} className={styles.aboutItem}>
              <img src={getImageUrl(item.ImageUrl)} alt="Cursor Icon" />
              <div className={styles.aboutItemText}>
                <h3 className={styles.aboutitemsTitle}>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
