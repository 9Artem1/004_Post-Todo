import { Card, Grid, Typography, styled } from '@mui/material';
import { Wrapper } from "../ui/wrapper";

const CommentsStyle = styled(Card)({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2em',
    gap: '30px',
  
    '@media (min-width: 768px)': {
      width: '60%',
      margin: '0 auto',
      alignItems: 'flex-start',
    },
  });

const Comment = () => {
    return (     
      <Wrapper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Grid sx={{ width: '70%', padding: 0, margin: "1rem", display: 'flex', justifyContent: 'center' }} container spacing={2}>
        <CommentsStyle>
                <Typography variant="h5" >AuthorNickName</Typography>
                <Typography>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Города алфавит скатился переулка снова безорфографичный реторический несколько которой, безопасную мир запятой ipsum, собрал подпоясал жаренные коварных меня рот эта?</Typography>
        </CommentsStyle>
        </Grid>
      </Wrapper>   
    )
}

export default Comment;
