import { useEffect } from "react";
import { Wrapper } from "../../components/ui/wrapper";
import Comment from "../../components/simple/Comment";
import { useSelector } from "react-redux";
import { fetchPostsThunk, selectPost } from "../../core/store/postSlice";
import { selectComment } from "../../core/store/commentSlice";
import { CommentComponent } from "../../components/simple/CommentComponent";
import { PostDetailsComponent } from "../../components/simple/PostDetailsComponent";
import { useAppDispatch } from "../../core/store";
import Post from "../../components/simple/Post";



const PostDetailsPage = () => {
    const dispatch = useAppDispatch()
    const {post} = useSelector(selectPost)
    const {comment} = useSelector(selectComment)

    useEffect(() => {
        dispatch(fetchPostsThunk())
      }, [])

    return (
            <Wrapper>
      {(post && <PostDetailsComponent post={post}/>) || <Post/>}
      {comment && <CommentComponent comment={comment}/>}
                <Comment />
                <Comment />
            </Wrapper>
    )
}

export default PostDetailsPage;
