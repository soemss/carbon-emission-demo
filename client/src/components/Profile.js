import React from 'react'
import { Typography, Button, Box, Grid, Stack } from "@mui/material";

export const Profile = () => {
  return (
    <Grid container rowSpacing={2}>
        <Grid xs={6} sx={{ marginTop: 15, textAlign: "center", }}>
            <Typography>player card</Typography>
        </Grid>
        <Grid xs={6} sx={{ marginTop: 15, textAlign: "center", }}>
            <Typography>other stuff</Typography>
        </Grid>
    </Grid>
  )
}
