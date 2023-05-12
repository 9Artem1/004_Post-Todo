import React, { useEffect } from "react";
import { Wrapper } from "../../components/ui/wrapper";
import { useSelector } from "react-redux";
import { fetchPostsThunk, selectPost } from "../../core/store/postSlice";
import { PostComponent } from "../../components/simple/PostComponent";
import { useAppDispatch } from "../../core/store";





const PostsPage = () => {
  const dispatch = useAppDispatch()

  const {post} = useSelector(selectPost)

  useEffect(() => {
    dispatch(fetchPostsThunk())
  }, [])

  return (
    <Wrapper>
      <PostComponent post={{id: -1, userId: -1, title: 'Наименование поста', body: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Толку однажды языком инициал. Себя которое буквенных страна его, это, дорогу подзаголовок деревни буквоград маленькая реторический алфавит ведущими, по всей бросил домах запятых. По всей текстов, переписали дороге пор агентство вскоре необходимыми вершину! Наш необходимыми однажды семантика решила имени взгляд букв раз. орический алфавит ведущими.'}}/>
      {post && <PostComponent post={post} />}
    </Wrapper>
  )
}

export default PostsPage;
