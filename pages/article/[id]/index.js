import React from 'react'
import {server} from "../../../config/index";
export default function index({article}) {
    return (
        <>
        <h1><span style={{color:"purple"}}>Article-{article.id}</span></h1>
        <div className="ui container segement" style={{textAlign:"center"}}>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
        </>
    )
}

export const getStaticProps=async(context)=>{

let res =await fetch(`${server}/api/article/${context.params.id}`)
let article = await res.json();
return {
    props:{
        article
    }
}
}
export const getStaticPaths = async ()=>{
    let res =await fetch(`${server}/api/article`)
    let articles = await res.json();

    let ids = articles.map(function(article){
        return article.id
    })

    let paths = ids.map(id=>{
        return {params:{id:id.toString()}}
    })
    return {
       paths,
       fallback:false
    }
}