import React from 'react'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { lightGreen } from '@mui/material/colors'
import gabreil from "../assests/gabreil.jpg"
import gian from "../assests/gian.jpg"
import haydn from "../assests/haydn.jpg"
import jurice from "../assests/jurica.jpg"
import kirill from "../assests/kirill.jpg"
import toa from "../assests/toa.jpg"
import tiger from "../assests/tiger.jpg"
import color1 from "../assests/color1.jpg"
import color2 from "../assests/color2.jpg"
import color3 from "../assests/color3.jpg"
import color4 from "../assests/color4.jpg"
const Rightbar = () => {
  return (
    <Box flex={2} p={2}
    sx={{display:{xs:"none",sm:"block"}}}
    mr={5}
    >
        <Box position="fixed" sx={{marginRight:"20px"}}>
           <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
       
       <AvatarGroup max={8}>
            <Avatar alt="Remy Sharp" src={gabreil} />
            <Avatar alt="Travis Howard" src={gian} />
            <Avatar alt="Cindy Baker" src={haydn} />
            <Avatar alt="Agnes Walker" src={jurice} />
            <Avatar alt="Trevor Henderson" src={kirill} />
            <Avatar alt="Trevor Henderson" src={toa} />
            <Avatar alt="Trevor Henderson" src={tiger} />
            <Avatar alt="Travis Howard" src={gian} />
            <Avatar alt="Trevor Henderson" src={kirill} />


      </AvatarGroup>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Photos
      </Typography>
      <ImageList cols={4} rowHeight={100} gap={5} sx={{overflow:"hidden"}}>
         <ImageListItem>
             <img src={color1} alt=''/>
         </ImageListItem>
         <ImageListItem>
             <img src={color2} alt=''/>
         </ImageListItem>
         <ImageListItem>
             <img src={color3} alt=''/>
         </ImageListItem>
         <ImageListItem>
             <img src={color4} alt=''/>
         </ImageListItem>
      </ImageList>
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Latest Conversations
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={toa}/>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src={kirill} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src={jurice} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar