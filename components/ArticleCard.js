import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from "next/link"
export default function ArticleCard({article}) {
    return (
        <>
          <Card.Group >
              <Link href="article/[id]" as={`article/${article.id}`}>
    <Card style={{width:"600px",height:"200px"}}>
      <Card.Content>
        <Card.Header > <span style={{color:"purple"}}>{article.title}</span></Card.Header>
        <br></br>
        <br></br>
        <Card.Description>
        {article.body}
        </Card.Description>
      </Card.Content>
    </Card>
    </Link>
  </Card.Group>
        </>
    )
}
