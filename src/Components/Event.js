import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Calendars from './Calendar/Calendars';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Event = () => {
  return (
    <>
    <Stack
  direction={{ xs: 'column', lg: 'row' }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
  sx={{backgroundColor:"#16468c", justifyContent:"space-around"}}
  
>
  
   <Box sx={{ width:"350px",marginLeft:{xs:"30px",sm:"220px" ,lg:"0px"}}}>
    <h1 className='text-center ' style={{color:"white"}}>News & Events</h1>


    <Box sx={{marginLeft:{lg:"28px",xs:"15px"}}}>
    <marquee width="300px" direction="up" height="300px"  >
   <Stack spacing={2} >
  <Item><Box style={{color:"black"}}>2023/3/23</Box>  SPECIAL STRATEGIES FOR GIRLS & MOTIVATIONAL PLANS</Item>
  <Item><Box style={{color:"black"}}>2023/3/23</Box>  SPECIAL STRATEGIES FOR GIRLS & MOTIVATIONAL PLANS</Item>
  <Item><Box style={{color:"black"}}>2023/3/23</Box>  SPECIAL STRATEGIES FOR GIRLS & MOTIVATIONAL PLANS</Item>
  <Item><Box style={{color:"black"}}>2023/3/23</Box>  SPECIAL STRATEGIES FOR GIRLS & MOTIVATIONAL PLANS</Item>
  <Item><Box style={{color:"black"}}>2023/3/23</Box>  SPECIAL STRATEGIES FOR GIRLS & MOTIVATIONAL PLANS</Item>
  <Item><Box style={{color:"black"}}>2023/3/23</Box>  SPECIAL STRATEGIES FOR GIRLS & MOTIVATIONAL PLANS</Item>
  
</Stack>
</marquee>
    </Box>
   
   </Box>
  


  <Box>
    <h1 className='text-center ' style={{color:"white"}}>School Calender</h1>


<Box sx={{marginLeft:{xs:"20px",sm:"200px" ,lg:"0px"}}}>
<Calendars />
</Box>

  </Box>


  <Box >

  <h1 className='text-center ' style={{color:"white"}}>School Calender</h1>

  <Card sx={{ maxWidth: 345 , marginLeft:{xs:"20px",sm:"200px",lg:"0px"}}}>
      <CardActionArea>
        
        <CardMedia
          component="img"
          height="200"
          image="https://cms.schoolscoop.co.in/uploads/rosemarykr/originals/08c50c4d-2527-4128-a19e-0aa89b2da186.jpg"
          alt="green iguana"
          sx={{ padding: "1em 1em 0 1em" }}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
          Chriayu Vijaywargiya

          </Typography>
        
        </CardContent>
      </CardActionArea>
    </Card>
  </Box>

  
</Stack>
    </>
  )
}

export default Event