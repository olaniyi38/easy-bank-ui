import { AppBar} from "@material-ui/core"
import gsap from "gsap/gsap-core"
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { useEffect } from "react"
import { useState } from "react"
import SideMenuButton from "./SideMenuButton"
import logo from '../images/logo.svg'

const Header = () => {
 

const [isActive, setIsActive] = useState(false)
    gsap.registerPlugin(ScrollToPlugin)

    const toggleMenu=()=>{
    setIsActive(!isActive)
    }

    let navItems = document.querySelectorAll('#header .mobile-nav .nav-link')
    navItems.forEach((navitem)=>{
        navitem.addEventListener('click',()=>{
            toggleMenu()
        })
    })

    //scrollto events
    const scrollTo=(e)=>{
        e.preventDefault()
       let {target} = e
        gsap.to(window,{
        duration:1,
        scrollTo:{y:`${target.getAttribute('href')}`,offsetY:100}
    })  
    console.log(target.id)
    }
  

    useEffect(()=>{
    document.querySelectorAll('.nav-link').forEach((link)=>{
        link.addEventListener('click',scrollTo)
    })
    })



return (
<AppBar id="header" position="fixed" color="default">
    <nav>

        <div className="desktop-nav">
            <p className="navbar-title"><img src={logo} alt="" /></p>
            <SideMenuButton toggleMenu={toggleMenu} active={isActive} />
            <ul>
                <li className="nav-item">
                    <a href="#about-me" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#my-projects" className=" nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Contact</a>
                </li>
            </ul>
        </div>

        <div className={`mobile-nav ${isActive ? 'active' : ''}`}>
            <ul>
                <li className="nav-item">
                    <a href="#" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#my-projects" className="nav-link">About</a>
                </li>
                <li className="nav-item">
                    <a href="#footer" className="nav-link">Contact</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Blog</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">Careers</a>
                </li>
            </ul>
        </div>

    </nav>
</AppBar>
)

}

export default Header