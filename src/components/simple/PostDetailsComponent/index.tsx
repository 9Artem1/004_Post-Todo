import { FC } from 'react';
import { Button, Card, Stack, Typography, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostById } from '../../../core/store/postSlice';
import { RootState } from '../../../core/store';
import AddCommentForm from '../../ordinary/AddCommentForm';
import { Wrapper } from '../../ui/wrapper';

const PostStyle = styled(Card)({
  width: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '2em',
  gap: '30px',
});

export const PostDetailsComponent: FC<{ postId: number }> = ({ postId  }) => {
  const post = useSelector((state: RootState) => selectPostById(state, postId));

  if (!post) {
    return <Typography variant="h2">Loading...</Typography>;
  }

  return (
   <Wrapper>
    <PostStyle>
      <Stack spacing={4} padding={3}>
        <Typography variant="h2" color="primary">
          {post.title}
        </Typography>
        <Typography variant="body1">{post.body}</Typography>
        <NavLink to="/">
          <Button variant="contained">К списку постов</Button>
        </NavLink>
      </Stack>
    </PostStyle>
    <AddCommentForm></AddCommentForm>
    </Wrapper>


);
};