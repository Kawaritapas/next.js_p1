import {articles} from "../article/data"

export default function handler(req,res){
    res.status(200).json(articles)
}