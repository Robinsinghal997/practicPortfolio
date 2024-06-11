import { getImageUrl } from "../../utils";
import style from './Hero.module.css'

const Hero = () => {
  return (
    <section className={style.container}>
      <div  className={style.content}>
        <h1  className={style.title}>Hello I am header</h1>
        <p  className={style.desc}>I am fullstack web developer with 3 year of experince please reachout to me if you want to create some website or any changes in your code Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas magni ab tenetur eligendi distinctio harum quia cupiditate accusantium? Iste consequuntur deleniti eius minus sequi consequatur sint excepturi explicabo labore quod?x</p>
        <a className={style.contactBtn} href="mailto:robinsinghal997@gmail.com">contact me</a>
      </div>
      <img className={style.heroImg} src={getImageUrl('hero/heroImage.png')} alt="image" />
      <div className={style.topBlur}></div>
      <div className={style.bottomBlur}></div>
    </section>
  );
};

export default Hero;
