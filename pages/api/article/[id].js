import {articles} from "./data";

export default  function handler(req,res) {
    let id = req.query.id;
   let filtered = articles.filter(article=>{
        return article.id===id
        
    })
    if(filtered.length>0){
        res.status(200).json(filtered[0])
    }else{
        res.status(404).json({
            message:"not found"
        })
    }
}