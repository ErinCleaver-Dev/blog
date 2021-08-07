import Articles from '../../data/articles.json'
import {Link} from 'react-router-dom'


const Body = (props) => {
    return(
        <main>
            <div className="article_link">
                { Articles.articles.map((article) => {
                        let link_path="/blog/article_" + article.article_id;
                        return (
                         <Link key={article.article_id} className="article_link" to={link_path}>{article.article}</Link>
                     )
                })
                   

                }
                
            </div>
        </main>
    )    
}

export default Body