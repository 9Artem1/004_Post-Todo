import React, { useState } from "react";
import { TextField } from '@mui/material';
import { styled, Button, Card, Typography } from '@mui/material';
import { Wrapper } from "../../components/ui/wrapper";
import { useSelector } from "react-redux";
import { selectValue, setValue, increment, decrement, clear } from "../../core/store/counterSlice";
import { useDispatch } from "react-redux";
import { FormAddPost } from "../../components/ordinary/AddPostForm";

const SupportContent = styled(Card)(
  {
    display: 'flex',
    flexDirection: 'row',
    gap: '30px',
    marginBottom: '3em',
    marginTop: '3em',
    alignItems: 'center',
    justifyContent: "space-around",
    padding: '1em'

  }
)

const CreatePost = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectValue);

  return (
    <Wrapper>
      {/* тренеровачный каунтер START */}
        <SupportContent>
          <Typography variant="h4"  color="primary">{value}</Typography>
          <TextField type="number" value={value} onChange={(event) => {
            event.preventDefault()
            dispatch(setValue(+event?.target?.value || 0))
          }} />

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
      {/* тренеровачный каунтер END */}

            <FormAddPost/>
    </Wrapper>
  )
}

export default CreatePost;