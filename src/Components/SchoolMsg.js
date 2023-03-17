import React from 'react'
import {Box,Typography}from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SchoolLogo from "../assets/SchoolLogo.png"


const SchoolMsg = () => {
  return (
    <Box >
<Grid container spacing={2} sx={{backgroundColor:"#aac5f0" , marginTop:"5px", padding:"0px"}}>
  <Grid item lg={6} sm={12}>
    
        
        
    <Box sx={{marginLeft:{lg:"25%", xs:"48%"} , paddingBottom:"10px"}}>
            <img src={SchoolLogo} alt="logo" style={{width:"200px", height:"180px"}}  />
        </Box>
        
    
  </Grid>
  <Grid item lg={6} sm={12}>

        <Box >
        <Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "500",
                     fontSize: "40px",
                    lineHeight: "20px",
                    color: "#404040",
                    marginTop:"10px",
                    marginBottom:"10px"
                    , marginLeft:{lg:"0px", xs:"20px"}}}>School Message</Typography>



<Typography sx={{
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "300",
                     fontSize: "16px",
                    lineHeight: "20px",
                    color: "#404040",
                    marginTop:"0px" 
                    , marginLeft:{lg:"0px", xs:"20px"}}}>We believe that every child is Unique and has a different learning approach. We, at Rose Mary, observe the talents and qualities and focus on them for educating the child. We facilitate the students to become spiritually deep rooted, morally upright & emotionally mature. We equip students with a sound value system to live as good human beings & impart substantial knowledge and skill to achieve excellence in diverse fields.</Typography>
    </Box>
    
  </Grid>

</Grid>
    </Box>
  )
}

export default SchoolMsg
