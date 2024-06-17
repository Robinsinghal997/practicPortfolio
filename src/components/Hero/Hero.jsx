import { getImageUrl } from "../../utils";
import style from './Hero.module.css'
import data from '../../Data/hero.json'
const Hero = () => {
  return (
    <section className={style.container}>
      <div  className={style.content}>
        <h1  className={style.title}>{data.hero.name}</h1>
        <p  className={style.desc}>{data.hero.Description}</p>
        <a className={style.contactBtn} href={`mailto:${data.hero.email}`}>contact me</a>
      </div>
      <img className={style.heroImg} src={getImageUrl(data.hero.imageUrl)} alt="image" />
      <div className={style.topBlur}></div>
      <div className={style.bottomBlur}></div>
    </section>
  );
};

export default Hero;
