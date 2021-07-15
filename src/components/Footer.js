import { Button } from "@material-ui/core"
import { Facebook, Instagram, Pinterest, Twitter, YouTube } from "@material-ui/icons"
import logo from '../images/logo-light.svg'

const Footer = () => {
    return (
        <footer id="footer">
            <h3> <img src={logo} alt="" /></h3>
            <div className="socials">
                <Facebook /> <YouTube/> <Twitter/> <Pinterest/> <Instagram/>
            </div>
            <p>About us</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Support</p>
            <p>Privacy Policy</p>

            <Button>Request Invite</Button>

            <p className="copywrite">@Easybank. All Rights Reserved</p>
        </footer>
    )
}

export default Footer
