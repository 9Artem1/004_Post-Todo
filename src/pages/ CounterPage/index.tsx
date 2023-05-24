import { Box, TextField } from '@mui/material';
import { styled, Button, Card, Typography } from '@mui/material';
import { Wrapper } from "../../components/ui/wrapper";
import { useSelector } from "react-redux";
import { selectValue, setValue, increment, decrement, clear } from "../../core/store/counterSlice";
import { useAppDispatch } from '../../core/store';

const SupportContent = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  marginBottom: '3em',
  marginTop: '5em',
  alignItems: 'center',
  justifyContent: "center",
  padding: '1em',

  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '20px',
    padding: '2.5em'
  }
})

const SupportContentButtons = styled(Card)({
    display: 'flex',
   flexDirection: 'column',
    gap: '10px',

  '@media (max-width: 768px)': {
    flexDirection: 'row',
    gap: '3px',
    padding: '2.5em'
  }
})



const CounterPage = () => {
const dispatch = useAppDispatch();
const value = useSelector(selectValue);

return (
  <Wrapper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <SupportContent sx={{bgcolor: "background.paper"}}>
      <Typography variant="h6" color="red">{value}</Typography>
      <TextField type="number" value={value} onChange={(event) => {
        event.preventDefault()
        dispatch(setValue(+event?.target?.value || 0))
      }} />

      <SupportContentButtons>
        <Button variant="contained" onClick={() => dispatch(increment())}>+ 1</Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>- 1</Button>
        <Button variant="contained" onClick={() => dispatch(clear())}>clear</Button>
      </SupportContentButtons>
    </SupportContent>
  </Wrapper>
)
}

export default CounterPage;