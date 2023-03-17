import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputLabel from '@mui/material/InputLabel';
import {  Menu, MenuItem } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{backgroundColor:"#f7f1f3"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{
                 display: { xs: "block", sm: "block",lg:"none" }
            }}  onClick={handleClick}
            ></MenuIcon>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Box sx={{ width: "330px", height: "500px" }}>
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>
              <Box component="div" sx={{
              flexGrow: 1,
              color: "black",
              
              textDecoration: "none",
              fontFamily: "Inter",
            }}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: "black", textDecoration: "none", fontFamily: "Inter" }}>About-us</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Age"
                >
                  <MenuItem >About us</MenuItem>
                  <MenuItem >Director Message</MenuItem>
                  <MenuItem >Management Message</MenuItem>
                  <MenuItem >Principle Message</MenuItem>

                </Select>
              </FormControl>
            </Box>

              </MenuItem>


              <MenuItem onClick={handleClose}>

              <Box component="div" sx={{
              flexGrow: 1,
              color: "black",
              textDecoration: "none",
              fontFamily: "Inter",
            }}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: "black", textDecoration: "none", fontFamily: "Inter" }}>Academic</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Age"
                  
                >
                  <MenuItem >Admission Procedure</MenuItem>
                  <MenuItem >Facilities</MenuItem>
                  <MenuItem >Our Team</MenuItem>
                  <MenuItem >ALT Lab</MenuItem>

                </Select>
              </FormControl>
            </Box>
              </MenuItem>


              <MenuItem onClick={handleClose}>Gallery</MenuItem>

           
              <MenuItem onClick={handleClose}>Contact us</MenuItem>
             

        <MenuItem onClick={handleClose}>
        <Button variant="contained" sx={{ flexGrow: 1 ,
              color: "black",
              textDecoration: "none",
              fontFamily: "Inter",backgroundColor:"red"}}>login
              </Button>
        </MenuItem>

        <MenuItem onClick={handleClose}>
        <Button variant="contained" sx={{ flexGrow: 1 ,
              color: "black",
              textDecoration: "none",
              fontFamily: "Inter",}}>Pay online</Button>

        </MenuItem>
      

              </Box>
            </Menu>
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,
              color: "black",
              mr: 4,
              display: { xs: "none", sm: "none",lg:"block" },
              textDecoration: "none",
              fontFamily: "Inter",}}>
            Home
          </Typography>
          
       

            <Box component="div" sx={{
              flexGrow: 1,
              color: "black",
              marginLeft: "-100px",
              mr: 2,
              display: { xs: "none", sm: "none", lg: "block" },
              textDecoration: "none",
              fontFamily: "Inter",
            }}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: "black", textDecoration: "none", fontFamily: "Inter",fontWeight: 500,fontSize: "1.2em" }}>About-us</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Age"
                  // sx={{boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }}}
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                  }}

                >
                  <MenuItem >About us</MenuItem>
                  <MenuItem >Director Message</MenuItem>
                  <MenuItem >Management Message</MenuItem>
                  <MenuItem >Principle Message</MenuItem>

                </Select>
              </FormControl>
            </Box>



            <Box component="div" sx={{
              flexGrow: 1,
              color: "black",
              marginLeft: "10px",
              mr: 5,
              display: { xs: "none", sm: "none", lg: "block" },
              textDecoration: "none",
              fontFamily: "Inter",
            }}>
              <FormControl fullWidth>
                <InputLabel sx={{ color: "black", textDecoration: "none", fontFamily: "Inter",fontWeight: 500,fontSize: "1.2em" }}>Academic</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  label="Age"
                  sx={{
                    boxShadow: "none",
                    ".MuiOutlinedInput-notchedOutline": { border: 0 },
                    "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                    "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      {
                        border: 0,
                      },
                  }}
                >
                  <MenuItem >Admission Procedure</MenuItem>
                  <MenuItem >Facilities</MenuItem>
                  <MenuItem >Our Team</MenuItem>
                  <MenuItem >ALT Lab</MenuItem>

                </Select>
              </FormControl>
            </Box>
          

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,
              color: "black",
              mr: 0,
              display: { xs: "none", sm: "none",lg:"block"  },
              textDecoration: "none",
              fontFamily: "Inter",}}>
            Gallery
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,
              color: "black",
              ml: -5,
              display: { xs: "none", sm: "none",lg:"block"  },
              textDecoration: "none",
              fontFamily: "Inter",}}>
            Contact us
          </Typography>

          <Button variant="contained" sx={{ flexGrow: 1 ,
              color: "black",
              mr: 2,
              display: { xs: "none", sm: "none",lg:"block"  },
              textDecoration: "none",
              fontFamily: "Inter",backgroundColor:"red"}}>login
              </Button>

          <Button variant="contained" sx={{ flexGrow: 1 ,
              color: "black",
              mr: 2,
              display: { xs: "none", sm: "none",lg:"block"  },
              textDecoration: "none",
              fontFamily: "Inter",}}>Pay online</Button>

   


        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar
