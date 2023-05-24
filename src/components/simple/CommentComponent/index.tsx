import { FC } from "react"
import { Comment } from "../../../core/types/comment"
import { Card, Grid, Typography, styled } from "@mui/material"


const CommentsStyle = styled(Card)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2em',
  gap: '30px',

  '@media (min-width: 768px)': {
    width: '60%',
    margin: '0 auto',
    alignItems: 'flex-start',
  },
});



export const CommentComponent: FC<{comment: Comment}> = ({comment}) => {
    return <Grid sx={{ width: '70%', padding: 0, margin: "1rem", display: 'flex', justifyContent: 'center' }} container spacing={2}>
    <CommentsStyle>
    <Typography variant="h5" >{comment.name}</Typography>
    <Typography>{comment.body}</Typography>
  </CommentsStyle>
    </Grid>
}