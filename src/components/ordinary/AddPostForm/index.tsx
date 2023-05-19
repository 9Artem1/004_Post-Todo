import React, { useState } from 'react'
import { Button, Card, TextField, Typography, styled } from '@mui/material'
import { useForm } from "react-hook-form";
import {addNewPost} from '../../../core/store/postSlice';
import { Form, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../core/store';


const CommentStyle = styled(Card)({
    width: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '2em',
    gap: '30px'
  })
  


export const FormAddPost = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        formState: {errors, isValid}
    } = useForm({
        mode: "onChange",
        defaultValues: {
            PostTitle: "",
            PostMessage: ""
        },
    });

    return (

        <Form
            onSubmit={handleSubmit((data) => {
                dispatch(addNewPost({ title: data.PostTitle, body: data.PostMessage, userId: 1 }));
                navigate('/')
            })}
        >
        <CommentStyle id="create-post">
            {errors.PostTitle && 
            <Typography 
                variant="inherit" 
                color="primary" 
                style={{
                    height: "14px",
                    color: "red",
                    fontSize: '14px'
                }}
            >
                {errors?.PostTitle?.message || 'Error!'}
            </Typography>
            }
            <TextField {...register("PostTitle", {
                required: 'Поле обязательно к заполнению',
                minLength: {
                    value: 3,
                    message: "Минимум 3 символa."
                }
            })}
                type='string'
                size='small'
                fullWidth
                label={'Никнейм'}
                variant='outlined'
                onChange={(event) => {
                    event.preventDefault();
                    setValue('PostTitle', event.target.value, {shouldValidate: true})
                }}
            />


            {errors.PostMessage && 
            <Typography 
                variant="inherit" 
                color="primary" 
                style={{
                    height: "14px",
                    color: "red",
                    fontSize: '14px'
                }}
            >
                {errors?.PostMessage?.message || 'Error!'}
            </Typography>
            }
            <TextField {...register("PostMessage", {
                required: 'Поле обязательно к заполнению',
                minLength: {
                    value: 5,
                    message: "Минимум 5 символов."
                }

            })}
                type='string'
                helperText=""
                size='small'
                fullWidth
                multiline
                rows={6}
                label={'Введите текст вашего сообщения'}
                variant='outlined'
                onChange={(event) => {
                    event.preventDefault();
                    setValue('PostMessage', event.target.value , {shouldValidate: true})
                }}
            />
            <Button type='submit' variant={'contained'} disabled={!isValid} >
                Добавить пост
            </Button>
            </CommentStyle>
        </Form>

    )
}





