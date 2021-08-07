import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Body/Home';
import Header from './Components/Header/Header';
import Blog from './Components/Body/Blog';
import Article from './Components/Body/Article';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Articles from './data/articles.json'


ReactDOM.render(
  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" exact component={Blog} />
      { Articles.articles.map((article) => {
        let link_path="/blog/article_" + article.article_id;
        return (
          <Route path={link_path} exact component={() => <Article article={article.article} rank={article.rank} id={article.article_id} />}/>
        )
      })}

    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
