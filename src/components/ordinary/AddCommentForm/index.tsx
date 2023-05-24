import React, { useState } from "react";
import { TextField } from '@mui/material';
import { Form } from 'react-router-dom'
import { styled, Button, Card, Typography } from '@mui/material';
import { useDispatch } from "react-redux";
import { setComment } from "../../../core/store/commentSlice";
import { useForm } from "react-hook-form";

const CommentStyle = styled(Card)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  padding: '1em',
  gap: '30px',
});

const ErrorStyle = styled(Typography)({
  color: "red",
  fontSize: '14px',
});

const AddCommentForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors, isValid}
  } = useForm({
    mode: "onChange",
    defaultValues: {
      CommentTitle: "",
      CommentMessage: ""
    },
  });

  return (
    <Form style={{ padding: 0, marginTop: "1rem", width: '100%', display: 'flex', justifyContent: 'center'}}
      onSubmit={handleSubmit((data) => {
        dispatch(setComment({ name: data.CommentTitle, body: data.CommentMessage }));
        setValue('CommentTitle', '');
        setValue('CommentMessage', '');
      })}>
      <CommentStyle id="create-comment">
        {errors.CommentTitle &&
          <ErrorStyle
            variant="inherit"
            color="primary"
          >
            {errors?.CommentTitle?.message || 'Error!'}
          </ErrorStyle>
        }
        <TextField

          {...register("CommentTitle", {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 3,
              message: "Минимум 3 символa."
            }
          })}
          type='string'
          helperText="Введите ваш никнейм"
          id="authorComment"
          label="Имя"
          onChange={(event) => {
            event.preventDefault();
            setValue('CommentTitle', event.target.value, {shouldValidate: true});
          }} 
        />

        {errors.CommentMessage && 
          <ErrorStyle
            variant="inherit"
            color="primary"
          >
            {errors?.CommentMessage?.message || 'Error!'}
          </ErrorStyle>
        }
        <TextField

          {...register("CommentMessage", {
            required: 'Поле обязательно к заполнению',
            minLength: {
              value: 5,
              message: "Минимум 5 символов."
            }
          })}
          type='string' 
          fullWidth 
          label="Текст сообщения" 
          helperText="Введите текст вашего сообщения" 
          id="ourComment" 
          multiline 
          rows={6}
          onChange={(event) => {
            event.preventDefault();
            setValue('CommentMessage', event.target.value, {shouldValidate: true});
          }} 
        />
        <Button type='submit' variant="contained" disabled={!isValid}>
          Добавить комментарий
        </Button>
      </CommentStyle>
    </Form>
  )
};

export default AddCommentForm;
