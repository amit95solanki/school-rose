import {AppBar,Box,Typography,Toolbar,styled}from "@mui/material";

const Head = styled(AppBar)`
background: #132f57;
`

const SchoolName = styled(Typography)`
margin:0`

const Header = () => {
  return (
    <Box >
    <Head position="static" sx={{marginTop:"65px"}}>
      <Toolbar>
        <Box sx={{display:"flex",marginLeft:{lg:"280px",xs:"1px"}}}>
            <Box sx={{marginRight:"40px"}}>  <img src="https://cms.schoolscoop.co.in/uploads/rosemarykr/originals/7ed49c95-e075-4fda-bd7c-b013c7ce026c.png" alt="logo"  /></Box>
           

            <Box >

            <SchoolName sx={{ fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "500",
                     fontSize: {lg:"38px",xs:"30px"},
                    lineHeight: "50px",
                    color: "white",}}>Rose Mary Hr. Sec. School</SchoolName>

            <Typography sx={{marginLeft:{lg:"100px",sx:"1px"}}}>Banjari Square, Kolar Road, Bhopal</Typography>

            </Box>
        </Box>
      </Toolbar>
    </Head>
  </Box>
  )
}

export default Header