import React from "react"
// material UI imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from "react-redux"
// redux imports
import puppyApi from "../redux/puppyApi";
// component imports
import PuppyCards from "./PuppyCards";
// router imports
import { useOutletContext, NavLink } from "react-router-dom";

const { useGetPuppiesQuery } = puppyApi

const GridPuppyContainer = () => {

  const { data, isLoading } = useGetPuppiesQuery()
  const value = useOutletContext()
  // console.log(value)
  // console.log(data)
//   console.log(puppies)

  if (isLoading) {
    return <h1>...loading</h1>
  } else {
    // console.log(data.data.players.name)
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.data.players.map((puppy, idx) => {
            if (puppy.name === value) {
              return (
                <Grid xs={3} sm={3} md={3} key={idx}>
                  <PuppyCards puppy={puppy} />
                </Grid>
              )
            } else if (!value) {
              return (
                <Grid xs={3} sm={3} md={3} key={idx}>
                  <PuppyCards puppy={puppy} />
                </Grid>
              )
            }
          })}
        </Grid>
      </Box>
    )
  }
}

export default GridPuppyContainer