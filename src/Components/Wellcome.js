import React from 'react'
import {AppBar,Box,Typography,Button}from "@mui/material";

import Grid from '@mui/material/Grid';
import { Container } from 'react-bootstrap';

const Wellcome = () => {
  return (
    <Box sx={{marginBottom:{lg:"0", xs:"20px"}}}>
<Grid container spacing={2}>
  <Grid item lg={6} xs={12}>
    
        <Typography sx={{
                    
                    height: "100px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "500",
                     fontSize: "38px",
                    lineHeight: "50px",
                    color: "#121212",
                    marginTop:{lg:"50px"},
                    marginLeft:{lg:"50px"},
                    marginBottom:{xs:"60px"}
                    }}>Welcome to Rose Mary Hr. Sec. School Bhopal
                    </Typography>

        <Typography sx={{
                    
                    height: "100px",
                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "300",
                     fontSize: "20px",
                    lineHeight: "20px",
                    color: "#121212",
                    marginTop:{lg:"30px"},
                    marginLeft:{lg:"50px"},
                    marginBottom:{xs:"30px"},
                    }}>
                    The Rose Mary Hr. Sec. School is established in 1991. The founder of Rose Mary School is Mr. Devendra Singh Ji.
                    </Typography>

                    <Button variant="outlined" sx={{
                       marginLeft:{lg:"50px"}, 
                      marginBottom:{lg:"25px"}
                    }}>Read more</Button>
    
  </Grid>
  <Grid item lg={6} xs={12}>
    
    <Container>
    <div className="ratio ratio-16x9 mt-5">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowFullScreen></iframe>
</div>
    </Container>
    
  </Grid>

</Grid>
    </Box>
  )
}

export default Wellcome