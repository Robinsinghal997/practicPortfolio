import { getImageUrl } from "../../utils";
import styles from './About.module.css'
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="me Sitting with the laptop"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem  }>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutitemsTitle}>Frontend Developer </h3>
              <p  className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci omnis hic qui fuga. Perferendis, ratione sunt, facere
                deserunt officia sed eveniet quidem incidunt at voluptates
                distinctio, deleniti rerum ex. Laboriosam?
              </p>
            </div>
          </li>
          <li  className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutitemsTitle}>Backend Developer </h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci omnis hic qui fuga. Perferendis, ratione sunt, facere
                deserunt officia sed eveniet quidem incidunt at voluptates
                distinctio, deleniti rerum ex. Laboriosam?
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Ui Icon" />
            <div className={styles.aboutItemText}>
              <h3 className={styles.aboutitemsTitle}>Ui Desiner</h3>
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci omnis hic qui fuga. Perferendis, ratione sunt, facere
                deserunt officia sed eveniet quidem incidunt at voluptates
                distinctio, deleniti rerum ex. Laboriosam?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
