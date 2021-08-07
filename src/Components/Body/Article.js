import {Link} from 'react-router-dom'

const Article = ({article, rank, id}) => {
    return(
        <article>
            <h1>{article} ({id})</h1> 
            <h1>Rank: {rank}</h1>
            <Link to="/Blog">Back</Link>
        </article>
    )
}

export default Article