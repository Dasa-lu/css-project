import n from'./style/NavBar.module.scss'
import logo from "../assets/img/logo.png";

export default function NavBar() {
    return (
        <span className={n.NavBar}>
           <span className={n.infoandLogo}>
               <img className={n.logo} alt="logo" src={logo} />
               <p>Tony Stark</p>
           </span>
            <span className={n.categories}>
                <p>Work</p>
                <p>About</p>
                <p>Skills</p>
                <p>Contact</p>
            </span>
        </span>
    )
}