import { FC } from 'react';
import { Box, Button, Card, Container, Grid, Stack, Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostById } from '../../../core/store/postSlice';
import { RootState } from '../../../core/store';
import AddCommentForm from '../../ordinary/AddCommentForm';


const PostStyle = styled(Card)({
  width: '86%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2em',
  gap: '30px',
  margin: '1em'
});

export const PostDetailsComponent: FC<{ postId: number }> = ({ postId  }) => {
  const post = useSelector((state: RootState) => selectPostById(state, postId));

  if (!post) {
    return <Typography variant="h2">Loading...</Typography>;
  }

  return (

    <>
    <Grid sx={{ width: '90%', padding: 0, margin: 0, display: 'flex', justifyContent: 'center' }} container spacing={2}>
    <PostStyle>
        <Typography variant="h3" color="primary">
          {post.title}
        </Typography>
        <Typography variant="body1">{post.body}</Typography>
        <NavLink to="/">
          <Button variant="contained">К списку постов</Button>
        </NavLink>

    </PostStyle>
    <Box  sx={{ width: '90%', display: 'flex', justifyContent: 'center'}}>
    <AddCommentForm/>
    </Box>

    </Grid>
    </>

);
};