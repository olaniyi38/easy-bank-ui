import { Button } from '@material-ui/core'
import desktopBg from '../images/bg-intro-desktop.svg'
import mobileBg from '../images/bg-intro-mobile.svg'
import mockupBg from '../images/image-mockups.png'
import {useState,useEffect} from 'react'
import gsap from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'

const Intro = () => {

    const [isMobile,setIsMobile] = useState(false)

    const checkWidth=()=>{
        let width = window.innerWidth
       width <= 425 ? setIsMobile(true) : setIsMobile(false)
       console.log(width)     
    }
    
    window.addEventListener('resize',()=>{
        checkWidth()
        console.log('resized')
    })

    let tl = gsap.timeline()
     let h1Before = CSSRulePlugin.getRule('#intro h1::before')

    useEffect(()=>{
     checkWidth()
     tl.to('#intro > div',{
         delay:.5,
         visibility:'visible'
     })
     .to(h1Before,{
         duration:1,
         top:'-100px',
         
     },'-=.5')
     .from('#intro .content p',{
         duration:1,
         opacity:0,
     })
     .from('#intro button',{
         duration:.5,
         scale:0,
         ease:'power.in'
     })
    },[])
      
return (
<section id="intro">
    <div>
            {
                isMobile ?
                <img className='bg1' src={mobileBg} alt="" />
                :
                <img className='bg1' src={desktopBg} alt="" />
            }
            <img className='bg2' src={mockupBg} alt="" />
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