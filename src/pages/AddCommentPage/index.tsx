import React, { useState } from "react";
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import { styled, Button, Card, Typography } from '@mui/material';
import { Wrapper } from "../../components/ui/wrapper";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setComment } from "../../core/store/commentSlice";

const CommentStyle = styled(Card)({
  width: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '2em',
  gap: '30px'
})



const AddComment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [name, setName] = useState<string>('');
  const [body, setBody] = useState<string>('');



  return (
    <Wrapper>
      <CommentStyle id="create-comment">
        <TextField type='string' value={name} helperText="Введите ваш никнейм" id="authorComment" label="Имя"
          onChange={(event) => {
            event.preventDefault();
            setName(event.target.value);
          }} />
        <TextField type='string' value={body} fullWidth label="Текст сообщения" helperText="Введите текст вашего сообщения" id="ourComment" multiline rows={6}
          onChange={(event) => {
            event.preventDefault();
            setBody(event.target.value);
          }} />


        <Button variant="contained" onClick={() => {
          if (name && body) {
            dispatch(setComment({ name, body }))
            navigate('/PostDetailsPage')
          }
        }} >
          Добавить комментарий
        </Button>
      </CommentStyle>
    </Wrapper>
  )
}

export default AddComment;
