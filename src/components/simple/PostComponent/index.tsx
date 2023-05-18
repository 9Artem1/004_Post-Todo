import { FC } from "react"
import { Post } from "../../../core/types/post"
import { Button, Card, Typography, styled } from "@mui/material"
import { NavLink } from "react-router-dom"

const PostStyle = styled(Card)(({
    marginTop: '2em',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '2em',
    gap: '30px'
  }))

export const PostComponent: FC<{post: Post}> = ({post}) => {
    return <PostStyle>
    <Typography variant="h2" color="primary">{post.title}</Typography>
    <Typography variant="body1">
      {post.body}
    </Typography>
    <NavLink to={`/PostDetailsPage/${post.id}`} >
       <Button key={post.id} variant="contained"  size="large">Подробнее</Button>
    </NavLink>
  </PostStyle>

}