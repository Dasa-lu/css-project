import s from "./style/InfoAbout.module.scss";
import TonyPhoto from "../assets/img/tonyPhoto.png"

export default function AbouTony() {
    return (
        <div className={s.hero}>
            <div className={s.aboutMe}>
                <h1 className={s.name}>Tony Stark</h1>
                <p className={s.info}>I build advanced technologies that redefine what’s possible. Genius, billionaire, playboy, philanthropist.</p>
                <div className={s.links}>
                    <a>View projects</a>
                    <a>Contact</a>
                </div>
            </div>

            <div className={s.photoWrap}>
                <img className={s.photo} alt="TonyPhoto" src={TonyPhoto} />
            </div>
        </div>
    )
}