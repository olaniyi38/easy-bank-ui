import Article from './Article'
import articles from '../articles'
import Header from './Header'
import Intro from './Intro'
import Services from './Services'
import img from '../images/image-plane.jpg'
import Footer from './Footer'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect } from 'react'

const App = () => {
    
    gsap.registerPlugin(ScrollTrigger)

   useEffect(()=>{
    gsap.from('#articles .article',{
        duration:1.5,
        y:20,
        stagger:.5,
        opacity:0,
        scrollTrigger:{
            trigger:'#articles h1',
            start:'top center',
            
        }
    })
   },[])
    return (
        <div className='container'>
            <Header></Header>
            <Intro></Intro>
            <Services></Services>
            <section id="articles">
                <h1>Latest Articles</h1>
            <div>
            {
              articles.map((article)=>{
               let id = Math.floor(Math.random() * 1000 + 1)   
             return <Article key={id} article={article}></Article>
              })
              }         
              </div>   
            </section>
            <Footer/>
        </div>
    )

}

export default App
