import { Box } from '@mui/material';
import React from 'react';
import {  useTheme} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Posts = () => {
  const theme = useTheme()
  const myPosts = [
    {letter:"A",color:"#800080",user:"Ali Hassan",imgLink:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/relax-jake-olson.jpg"},
    {letter:"N",color:"#008080",user:"Ali Hassan",imgLink:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/relax-andrii-kazun.jpg"},
    {letter:"F",color:"#4169e1",user:"Ali Hassan",imgLink:"https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/relax-ajar-setiadi.jpg"},
  ]
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{flexGrow:"2"}}>
    {myPosts.map((item) => {
      return(
        <Card key={item.letter} sx={{ maxWidth:{xs:"95%",sm:444} , mx:"auto",my:5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{color:theme.palette.getContrastText(item.color) ,bgcolor: item.color }} aria-label="recipe">
            {item.letter}
            </Avatar>
          }
          action={
            <IconButton  onClick={handleClick} aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          
          }
          
          title={item.user}
          subheader="September 14, 2016"
        />
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <CardMedia
          component="img"
          height="194"
          image={item.imgLink}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <Box sx={{flexGrow:"1"}}/>
          <Checkbox
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
        </CardActions>
        
      </Card>
      )
    })}
    </Box>
  );
}

export default Posts;
