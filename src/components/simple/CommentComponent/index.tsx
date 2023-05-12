import { FC } from "react"
import { Comment } from "../../../core/types/comment"
import { Card, Typography, styled } from "@mui/material"


const CommentsStyle = styled(Card)({
    marginTop: '30px',
    width: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '2em',
    gap: '30px'
})




export const CommentComponent: FC<{comment: Comment}> = ({comment}) => {
    return <CommentsStyle>
    <Typography variant="h4" >{comment.name}</Typography>
    <Typography>{comment.body}</Typography>
  </CommentsStyle>
}