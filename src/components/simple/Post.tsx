import React from "react";
import { Button, Card, Stack, Typography, styled } from '@mui/material';
import { Wrapper } from "../ui/wrapper";
import { NavLink } from "react-router-dom";

const PostStyle = styled(Card)({
    width: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: '2em',
    gap: '30px'
})

const Post = () => {
    return (
        <Wrapper>
        <PostStyle>
            <Stack spacing={4} padding={3}>
                <Typography variant="h2" color="primary">Наименование поста</Typography>
                <Typography variant="h6" color="secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, deleniti eligendi. Maxime corrupti officiis nostrum facilis illo magni impedit, ullam natus quam magnam dolores corporis earum qui nihil similique quibusdam. орический алфавит ведущими, по всей бросил домах запятых. По всей текстов, переписали дороге пор агентство вскоре необходимыми вершину! Наш необходимыми однажды семантика решила и Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, deleniti eligendi. Maxime corrupti officiis nostrum facilis illo magni impedit, ullam natus quam magnam dolores corporis earum qui nihil similique quibusdam.
                </Typography>
                <NavLink to="/"> <Button variant="contained">К списку постов</Button></NavLink>
                        <NavLink to="/AddComment"> <Button variant="contained">Добавить коментарий</Button></NavLink>
            </Stack>
        </PostStyle>
    </Wrapper>
    )
}

export default Post;
