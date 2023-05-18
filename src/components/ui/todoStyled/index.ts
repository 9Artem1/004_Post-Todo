import { Card, styled, Box, Container } from "@mui/material";


export const TodoStyle = styled(Box)({
    width: '90%',
    marginTop: '2em',
    display: 'flex',
    flexDirection: 'row',
    padding: '2em',
    gap: '30px',
})

export const TodoStyleButton = styled(Container)({
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    gap: '30px',
    textAlign: 'justify',
    justifyContent: "space-between",
})

export const PostStyle = styled(Card)({
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    padding: '1em',
    gap: '30px',
    marginBottom: '30px',
})

export const TodoTitle = styled(Box)<{ checked: boolean }>((props) => ({
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'start',
    alignItems: 'start',
    textDecoration: props.checked ? 'line-through' : 'none',
}))

export const TodoTitleEdit = styled(Box)({
    margin: '0',
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    textAlign: 'start',
    alignItems: 'start',

})


