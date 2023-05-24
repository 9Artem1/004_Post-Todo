import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../core/store";
import { FC, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { fetchAlbums } from "../../core/store/albumsSlice";
import { Wrapper } from "../../components/ui/wrapper";
import { Button, Container } from "@mui/material";


const AlbumsPage: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, albums, error } = useSelector((state: RootState) => state.albums);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Wrapper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container sx={{ flexGrow: 1, pt: 2 }}>
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid key={album.id} item xs={12} sm={6} md={4} lg={3}>

              <Box sx={{ height: "6em", bgcolor: "background.paper", textAlign: 'center', p: 2, borderRadius: 1, textDecoration: "none" }}>
                <Typography variant="h6" component={Link} to={`/photospage/${album.id}`} style={{ textDecoration: 'none' }} sx={{ color: '#00ADB5' }}>
                  {album.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
        <NavLink to={'/'} >
          <Button style={{ marginTop: '3em' }} variant="contained" size="large">На главную</Button>
        </NavLink>
      </Box>
      </Container>
    </Wrapper>
  );
};

export default AlbumsPage;