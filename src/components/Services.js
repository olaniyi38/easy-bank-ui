import img1 from '../images/icon-online.svg'
import img2  from '../images/icon-budgeting.svg'
import img3  from '../images/icon-onboarding.svg'
import img4  from '../images/icon-api.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'


const Services = ()=>{
  
    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        gsap.from('#services .container div',{
            duration:1.5,
            y:20,
            stagger:.5,
            opacity:0,
            scrollTrigger:{
                trigger:'#services h1',
                start:'top center',
                
            }
        })
    },[])
return(
<section id="services">
    <h1>Why work with us?</h1>
    <p>We leverage Open Banking to turn your bank account into your financial hub. Control
        your finances like never before.
    </p>
    <div className="container">
        <div>
            <img src={img1} alt="" />
            <h3>Online Banking</h3>
            <p>
            Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.
            </p>
        </div>

        <div>
            <img src={img2} alt="" />
            <h3>Simple Budgeting</h3>
            <p>
            See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.
            </p>
        </div>

        <div>
            <img src={img3} alt="" />
            <h3>Fast Onboarding</h3>
            <p>
            We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.
            </p>
        </div>

        <div>
            <img src={img4} alt="" />
            <h3>Open Api</h3>
            <p>
            Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.
            </p>
        </div>
    </div>
</section>
)
}

export default Services