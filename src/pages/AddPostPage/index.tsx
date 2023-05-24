
import { Wrapper } from "../../components/ui/wrapper";
import { FormAddPost } from "../../components/ordinary/AddPostForm";
import { AppBar, Box, Grid } from "@mui/material";



const CreatePost = () => {
  


  return (
    <>
    <Wrapper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Box  sx={{ width: '90%', display: 'flex', justifyContent: 'center'}}>
    <FormAddPost/>
          </Box>


    </Wrapper>
    </>

  )
}

export default CreatePost;