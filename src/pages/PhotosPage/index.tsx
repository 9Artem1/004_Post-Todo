import { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Photos } from "../../core/types/photos";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Wrapper } from "../../components/ui/wrapper";
import { Button, Container } from "@mui/material";

const PhotosPage = () => {
    const [photos, setPhotos] = useState<Photos[]>([]);
    const { albumId } = useParams<{ albumId: string }>();

    useEffect(() => {
        const fetchPhotos = async () => {
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_limit=7`
            );
            const data = await response.json();
            setPhotos(data);
        };
        fetchPhotos();
    }, [albumId]);

    return (
        <Wrapper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Container sx={{ flexGrow: 1, pt: 2 }}>
                <Grid container spacing={2}>
                    {photos.map((photo) => (
                        <Grid key={photo.id} item xs={12} sm={6} md={4} lg={3}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                height: '15em',
                                bgcolor: "background.paper",
                                p: 2,
                                borderRadius: 1
                            }}>
                                <img
                                    src={photo.thumbnailUrl}
                                    alt={photo.title}
                                    style={{ maxWidth: "100%" }}
                                />
                                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                                    {photo.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2}}>
                <NavLink to={'/albumspage'} >
                <Button style={{ marginTop: '3em' }} variant="contained" size="large">Назад к альбомам</Button>
                </NavLink>
                </Box>

            </Container>

        </Wrapper>

    );
};

export default PhotosPage;