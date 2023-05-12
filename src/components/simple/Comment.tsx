import { Card, Typography, styled } from '@mui/material';
import { Wrapper } from "../ui/wrapper";

const CommentsStyle = styled(Card)({
    width: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '2em',
    gap: '30px'
})

const Comment = () => {
    return (
        <Wrapper>        
        <CommentsStyle>
                <Typography variant="h4" >AuthorNickName</Typography>
                <Typography>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Города алфавит скатился переулка снова безорфографичный реторический несколько которой, безопасную мир запятой ipsum, собрал подпоясал жаренные коварных меня рот эта?</Typography>
        </CommentsStyle>
        </Wrapper>
    )
}

export default Comment;
