import Head from 'next/head'
import styles from "/home/tapas/Desktop/next/next-tu/styles/Layout.module.css"
import {server} from "../config/index"
import ArticleList from "../components/ArticleList"
export default function Home({articles}) {
  return (
    <div >
      <Head>
        <title>web dev</title>
        <meta name ="keywords" content="web"></meta>
      </Head>
      
      <h1 style={{color:"black"}} className={styles.title}>Welcome<span style={{color:"purple"}}> Developers</span></h1>
      <br></br>
      <br></br>
      <ArticleList  articles = {articles}/>
   
    </div>
  )
}

export const getStaticProps = async()=>{
  let res  = await fetch(`${server}/api/article`)
   
  let articles = await res.json()
     return {
         props:{
           articles
         }
     }
 }
