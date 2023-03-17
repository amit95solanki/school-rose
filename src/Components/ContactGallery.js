
import React from 'react'
import {Box,Button,Typography}from "@mui/material";
import Grid from '@mui/material/Grid';
import Con from "../assets/Con.png";
import Photo from "../assets/Photo.png"

const ContactGallery = () => {
  return (
 <>
 <Box>
<Grid container spacing={2} sx={{backgroundColor:"#4cade0",marginTop:"0px"  }}>


<Grid item lg={6} xs={6}>
    
        
        
    <Box sx={{width:"100px", height:"100px" , border:"2px solid white",marginLeft:{lg:"60%",xs:"35%" }}} >

        <img src={Con} alt="con"   sx={{marginLeft:"10px"}}/>
    <Button  sx={{marginLeft:"10px" }}>Contact</Button> 
        </Box>
        
    
  </Grid>




  <Grid item lg={6} xs={6} marginBottom={2}>

        <Box sx={{width:"100px", height:"100px" , border:"2px solid white" ,marginLeft:{lg:"180px"}}} >
        <img src={Photo} alt="con"    />
     <Button  sx={{marginLeft:"10px" }}>Gallery</Button>
    </Box>
    
  </Grid >



</Grid>
    </Box>
 </>
  )
}

export default ContactGallery
