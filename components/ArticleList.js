import React from 'react';
import ArticleCard from "./ArticleCard"
export default function ArticleList({articles}) {
    return (
        <div >
            {
                articles.map(function(article){
                  return <ArticleCard  key ={article.id} article={article}/>
                })
            }
        </div>
    )
}

