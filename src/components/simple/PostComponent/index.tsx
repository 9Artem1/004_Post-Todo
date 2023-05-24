import { FC } from "react"
import { Post } from "../../../core/types/post"
import { Button, Card, Typography, styled, Grid, Container, Box } from "@mui/material"
import { NavLink } from "react-router-dom"

const PostStyle = styled(Card)(({
    marginTop: '2em',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1em',
    textAlign: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
        width: '88%',
      }

}))

export const PostComponent: FC<{post: Post}> = ({post}) => {
    return (
<Grid sx={{height: '35em', padding: 0, margin: 0 }} container spacing={2}>
                <PostStyle sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Typography variant="h5" color="primary">{post.title}</Typography>
                    <Typography variant="body1">
                        {post.body}
                    </Typography>
                    <NavLink to={`/PostDetailsPage/${post.id}`}>
                        <Button key={post.id} variant="contained" size="large">Подробнее</Button>
                    </NavLink>
                </PostStyle>
        </Grid>
    )
}