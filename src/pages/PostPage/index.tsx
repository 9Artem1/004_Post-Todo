import React, { useEffect } from "react";
import { Wrapper } from "../../components/ui/wrapper";
import { useSelector } from "react-redux";
import { fetchPostsThunk, selectPost } from "../../core/store/postSlice";
import { PostComponent } from "../../components/simple/PostComponent";
import { useAppDispatch } from "../../core/store";


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
    <Wrapper>
      {post && post.map((singlePost) => (
        <PostComponent key={singlePost.id} post={singlePost} />
      ))}
    </Wrapper>
  )
}

export default PostsPage;