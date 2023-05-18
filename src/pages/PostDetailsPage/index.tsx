import { useEffect } from "react";
import { Wrapper } from "../../components/ui/wrapper";
import Comment from "../../components/simple/Comment";
import { useSelector } from "react-redux";
import { fetchPostsThunk, selectPostById } from "../../core/store/postSlice";
import { selectComment } from "../../core/store/commentSlice";
import { CommentComponent } from "../../components/simple/CommentComponent";
import { PostDetailsComponent } from "../../components/simple/PostDetailsComponent";
import { useAppDispatch } from "../../core/store";
import { useParams } from "react-router-dom";
import { RootState } from "../../core/store";
import { Typography } from "@mui/material";


const PostDetailsPage = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const postId = id ? parseInt(id, 10) : undefined;
  
  const post = useSelector((state: RootState) => {
    if (postId !== undefined) {
      return selectPostById(state, postId);
    }
  });
  const { comment } = useSelector(selectComment);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, []);

  return (
    <Wrapper>
      {post ? (
        <PostDetailsComponent key={post.id} postId={post.id} />
      ) : (
        <Typography variant="h6" color="secondary">
        Post не найден!
      </Typography>
      )}
      {comment && <CommentComponent comment={comment} />}
      <Comment />
      <Comment />
    </Wrapper>
  );
};

export default PostDetailsPage;