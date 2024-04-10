import {useState} from 'react';
import { Box, Tooltip,useTheme,Stack,Avatar,TextField } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';


const AddBoxo = () => {
  const theme = useTheme()
  const [isopen, setisopen] = useState(false);
  return (
    <Box>
      <Tooltip sx={{position:"fixed",bottom:"20px",left:"20px"}} title="Add Post">
      <Fab onClick={() => {
        setisopen(true)
      }} color="primary" aria-label="add">
  <AddIcon />
</Fab>
      </Tooltip>
      <Modal
  open={isopen}
  onClose={() => {
    setisopen(false)
  }}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{position:"fixed",width:{xs:"95%",sm:399},bgcolor:theme.palette.background.default,top:"50%",left:"50%",transform:"translate(-50%,-50%)",p:"22px",borderRadius:"10px"}}>
    <Typography mb={1} align='center' variant="h6" component="h2">
      Create A Post
    </Typography>
  <Stack sx={{alignItems:"center"}} direction="row">
    <Avatar  src="https://images.pexels.com/photos/1068205/pexels-photo-1068205.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    <Typography ml="14px" variant="body1" >Leyla Hassan</Typography>
  </Stack>
  <TextField
          sx={{width:"100%"}}
          multiline
          rows={3}
          placeholder='What is in your mind'
          variant="standard"
        />
        <Stack spacing={1} my={3} direction="row">
         <EmojiEmotionsIcon  color="primary"/>
         <ImageIcon  color="secondary"/>
         <VideoCameraBackIcon  color="success"/>
         <PersonAddIcon  color="error"/>
        </Stack>
        <ButtonGroup sx={{width:"100%"}} variant="contained" aria-label="Basic button group">
  <Button sx={{flexGrow:1}}>Post</Button>
  <Button>
<DateRangeIcon/>
  </Button>
  
</ButtonGroup>
  </Box>
</Modal>
    </Box>
  );
}

export default AddBoxo;
