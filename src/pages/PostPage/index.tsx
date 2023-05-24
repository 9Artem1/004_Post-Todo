import React, { useEffect } from "react";
import { Wrapper } from "../../components/ui/wrapper";
import { useSelector } from "react-redux";
import { fetchPostsThunk, selectPost } from "../../core/store/postSlice";
import { PostComponent } from "../../components/simple/PostComponent";
import { useAppDispatch } from "../../core/store";
import { AppBar, Box, Container, Grid } from "@mui/material";

const PostsPage = () => {
  const dispatch = useAppDispatch()

  const { post, status, error } = useSelector(selectPost)

  useEffect(() => {
    dispatch(fetchPostsThunk())
  }, [dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Wrapper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container sx={{ flexGrow: 1, pt: 2, pb: 2 }}>
        <Grid container spacing={2}>
          {post && post.map((singlePost) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={singlePost.id}>
                  <PostComponent post={singlePost} />
              </Grid>
          ))}
      </Grid>
            </Container>
</Wrapper>
         



  )
}

export default PostsPage;