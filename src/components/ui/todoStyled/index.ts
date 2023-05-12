import { Card, styled, Box, Container } from "@mui/material";


export const TodoStyle = styled(Box)({
    marginTop: '2em',
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '2em',
    gap: '30px',
    textAlign: 'justify'
})

export const TodoStyleButton = styled(Container)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '30px',
    textAlign: 'justify',
    justifyContent: 'flex-end',
})

export const PostStyle = styled(Card)({
    width: '130vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '1em',
    gap: '30px',
    marginBottom: '30px',
})

export const TodoTitle = styled(Box)<{ checked: boolean }>((props) => ({
    width: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textDecoration: props.checked ? 'line-through' : 'none',
}))

export const TodoTitleEdit = styled(Box)({
    width: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '30px',
})


