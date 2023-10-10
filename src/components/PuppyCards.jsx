import React, { useState, useEffect } from "react"
// material UI imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// redux imports
import { useSelector } from "react-redux";
import puppyApi from "../redux/puppyApi";
// component imports
import SeeDetailsButton from "./SeeDetailsButton";
import DeletePuppyButton from "./DeletePuppyButton";

const PuppyCards = ({puppy}) => {

//   console.log(puppy)
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {puppy.name}
          </Typography>
          <Typography>
            <img src={puppy.imageUrl} alt={puppy.name} className="puppy-image"/>
          </Typography> 
        </CardContent>
        <CardActions>
          <SeeDetailsButton puppy={puppy}/>
          <DeletePuppyButton puppy={puppy}/>
        </CardActions>
      </Card>
    </div>
  )
}

export default PuppyCards