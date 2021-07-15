import { Card, CardContent, CardMedia } from "@material-ui/core"


const Article = ({article}) => {
    console.log(article.imgSrc)
    return (
        <Card className='article'>
           <img src={article.imgSrc} alt="" />         
            <CardContent>
              <p className="author">by {article.author}</p>
              <h3 className='title'>{article.title}</h3>
              <p className="content">
                  {article.content}
              </p>
            </CardContent>
        </Card>     
        
    )
}

export default Article
