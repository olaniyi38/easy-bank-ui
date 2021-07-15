import { Button } from '@material-ui/core'
import introBg from '../images/bg-intro-mobile.svg'
import mockupBg from '../images/image-mockups.png'

const Intro = () => {
return (
<section id="intro">
    <div>
        <img src={introBg} alt="" />
        <div className="mockup-bg">
            <img src={mockupBg} alt="" />
        </div>
        <div className="content">
            <h1>
                Next generation digital banking
            </h1>

            <p> Take your financial life online. Your Easybank account will be a one-stop-shop
                for spending, saving, budgeting, investing, and much more.
            </p>
           <Button variant="contained" >Request invite</Button>


                
        </div>
    </div>
</section>
)
}

export default Intro