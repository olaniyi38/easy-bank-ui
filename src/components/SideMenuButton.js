import { IconButton } from "@material-ui/core"
import hamburgerIcon from "../images/icon-hamburger.svg"
import closeIcon from '../images/icon-close.svg'
const SideMenuButton = ({toggleMenu,active}) => {
    return (
        <>
         <IconButton className={`menu-button `} onClick={toggleMenu}>
           {active ?  <img src={closeIcon} alt="" /> : <img src={hamburgerIcon} alt="" />}
         </IconButton>
        </>
    )
}

export default SideMenuButton
