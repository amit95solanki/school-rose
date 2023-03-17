import { Box, Stack } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import SchoolLogo from "../assets/SchoolLogo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';

export const Footer = () => {
  return (
    <Box sx={{backgroundColor:"#93214f"}}
    >
      <Stack>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={6} md={12}>
             
          <Stack spacing={2} direction="row" sx={{margin:"90px",
                marginBottom:"0px"}}>
          <img src={SchoolLogo} alt="logo" style={{height:"80px",width:"60px"}} />
          <Typography style={{marginTop:"25px" , color:"yellow" , fontSize:{lg:"26px",sm:"16px"}}}>Rose Mary Hr. Sec. School</Typography>
         </Stack>
           
<Box sx={{marginLeft:"100px" , marginTop:"20px"}}>
<Grid container sx={{ color: 'text.primary' }}>
      <Grid item xs={2} >
       <MailIcon sx={{color:"white"}}/>
      </Grid>
      <Grid item xs={10}>
      <Typography sx={{color:"white"}}>maryroseschool@gmail.com</Typography>
      </Grid>

      <Grid item xs={2}>
       <MobileScreenShareIcon sx={{color:"white"}}/>
      </Grid>
      <Grid item xs={10}>
      <Typography sx={{color:"white"}}>7552493022</Typography>
      </Grid>

      <Grid item xs={2}>
       <MobileScreenShareIcon sx={{color:"white"}}/>
      </Grid>
      <Grid item xs={10}>
      <Typography sx={{color:"white"}}>7552493022</Typography>
      </Grid>
      
      <Grid item xs={2}>
       <LocationOnIcon  sx={{color:"white"}}/>
      </Grid>
      <Grid item xs={10}>
      <Typography sx={{color:"white"}}>Banjari Square, Kolar Road, Bhopal</Typography>
      </Grid>

    </Grid>

</Box>





          </Grid>
          <Grid item lg={3} xs={6} sm={6} sx={{marginLeft:{xs:"90px" , lg:"0px"}}}>
            <Typography
            
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "160%",
              color: "yellow",
              marginTop:"90px",fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              marginBottom:"30px",
            }}>
              MENU
            </Typography>
            
            <Typography 
            sx={{fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "190.9%",
            color: "white"}}>
              Home </Typography>


            <Typography    sx={{fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "190.9%",
            color: "white"}}
            >Service 
            </Typography>

            
            <Typography    sx={{fontFamily: 'Inter',
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "190.9%",
            color: "white"}}>
              About us
              </Typography>
            <Typography
               sx={{fontFamily: 'Inter',
               fontStyle: "normal",
               fontWeight: "500",
               fontSize: "18px",
               lineHeight: "190.9%",
               color: "white"}}
               >Blog </Typography>

          </Grid>

          <Grid item lg={3 } xs={6} sm={6} sx={{marginLeft:{xs:"90px" , lg:"0px"}}}>
            <Typography
            
            sx={{
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "24px",
              lineHeight: "160%",
              color: "yellow",
              marginTop:"90px",
              marginBottom:"30px"
            }}>
              Service
            </Typography>

            <FacebookIcon sx={{height:"50",width:"50px",color:"white"}} />

          </Grid>

          
          <Grid  item xs={12}>
               <Box bgcolor="#121212" sx={{
                height: "40px",
                textAlign:"center",
                paddingTop:"20px"
               }}>

<Typography sx={{ color:"white", fontFamily: 'Inter',
fontStyle: "normal",
fontWeight: "400",
fontSize: "14px",
lineHeight: "17px"
}}>© 2023 . All Rights Reserved</Typography>
               </Box>
          </Grid>
          
        </Grid>
      </Stack>
    </Box>
  );
};
