import React, { useState } from "react";
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { styled, Button, Card, Typography } from '@mui/material';
import { Wrapper } from "../../components/ui/wrapper";
import { useSelector } from "react-redux";
import { selectValue, setValue, increment, decrement, clear } from "../../core/store/counterSlice";
import { setPost } from "../../core/store/postSlice";
import { useDispatch } from "react-redux";

const CommentStyle = styled(Card)({
  width: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '2em',
  gap: '30px'
})

const SupportContent = styled(Card)(
  {
    width: '50vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    gap: '30px',
    marginBottom: '3em'
  }
)

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const value = useSelector(selectValue);


  return (
    <Wrapper>
        {/* тренеровачный каунтер START */}
        <SupportContent>
                <Typography color="primary">{value}</Typography>
                    <TextField type="number" value={value} onChange={(event) => {
                    event.preventDefault()
                    dispatch(setValue(+event?.target?.value || 0))
                    }} />
                <SupportContent>
                    <Button variant="contained" onClick={() => dispatch(increment())}
                    >+ 1
                    </Button>
                    <Button variant="contained" onClick={() => dispatch(decrement())}
                    >- 1
                    </Button>
                    <Button variant="contained" onClick={() => dispatch(clear())}
                    >clear
                    </Button>
            </SupportContent>
        </SupportContent>
        {/* тренеровачный каунтер END */}

      <CommentStyle id="create-post">
        <TextField type='string' value={title} helperText="Введите ваш никнейм" id="authorComment" label="Имя"
          onChange={(event) => {
            event.preventDefault();
            setTitle(event.target.value);
          }} />
        <TextField type='string' value={body} fullWidth label="Текст сообщения" helperText="Введите текст вашего сообщения" id="ourComment" multiline rows={6}
          onChange={(event) => {
            event.preventDefault();
            setBody(event.target.value);
          }} />


        <Button variant="contained" onClick={() => {
          if (title && body) {
            dispatch(setPost({ title, body }))
            navigate('/')
          }
        }} >
          Добавить пост
        </Button>
      </CommentStyle>
    </Wrapper>
  )
}

export default CreatePost;
