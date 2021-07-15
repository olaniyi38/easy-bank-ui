import Article from './Article'
import articles from '../articles'
import Header from './Header'
import Intro from './Intro'
import Services from './Services'
import img from '../images/image-plane.jpg'
import Footer from './Footer'
const App = () => {
    console.log(img)
    return (
        <div className='container'>
            <Header></Header>
            <Intro></Intro>
            <Services></Services>
            <section id="articles">
                <h1 style={{textAlign:'center'}}>Latest Articles</h1>
              {
              articles.map((article)=>{
               let id = Math.floor(Math.random() * 1000 + 1)   
             return <Article key={id} article={article}></Article>
              })
              }            
            </section>
            <Footer/>
        </div>
    )

}

export default App
