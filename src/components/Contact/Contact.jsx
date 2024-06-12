import { getImageUrl } from "../../utils";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <footer className={style.contact}>
      <div className={style.text}>
        <h2>Contact</h2>
        <p>feel Free to React out me</p>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto :Robinsinghal997@gmail.com ">
            RobinSinghal997@gmail.com
          </a>
        </li>
        <li className={style.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linked Icon"
          />
          <a href="https://www.linkedin.com/myname ">
            linkedin.com/in/robin-singhal-12125b1b0/
          </a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Git Icon" />
          <a href="https://github.com/Robinsinghal997">
            github.com/Robinsinghal997
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
