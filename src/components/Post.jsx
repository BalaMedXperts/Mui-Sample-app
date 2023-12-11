import React from 'react'
import { Avatar,  Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Collapse, IconButton, Typography } from '@mui/material'
import {  Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import gabreil from "../assests/gabreil.jpg"
const Post = () => {
  return (
    <div>
         <Card sx={{margin:5}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red"}} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://media.istockphoto.com/id/1472932742/photo/group-of-multigenerational-people-hugging-each-others-support-multiracial-and-diversity.jpg?s=1024x1024&w=is&k=20&c=y0iPjg_awDHw2Ps96JgMUXRvM5WoCeNA-4MgbUelbVY="
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
        <IconButton aria-label="add to favorites">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        
      </CardActions>
      
    </Card>
    </div>
  )
}

export default Post