

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';



const StyledLink = styled(NavLink)(({theme}) => ({
  textDecoration: 'none',
  color: theme.palette.primary.contrastText
}))

export const Navbar: React.FC = () => {
  const pages = [
    {to: "/", text: "Список постов"},
    {to: "PostDetailsPage", text: "Случайный Пост"},
    {to: "CreatePost", text: "Добавить новый пост"},
    {to: "TodoPage", text: "ToDo Лист"}
  ];

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Генератор постов
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end'  }}>
              {pages.map(({to, text}) => (
                <Button
                  key={to}
                  sx={{ my: 6, color: 'white', display: 'block', marginLeft: '2em', textDecoration: 'none'  }}
                >
                  <StyledLink 
                  to={to}>{text}
                  </StyledLink>
                </Button>
              ))}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}

