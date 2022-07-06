import { styled,alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import React, { useState,useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Array from'../array';
import  '../App.css';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { borderColor } from '@mui/system';
import Search from '@mui/icons-material/Search';



const Buttons = () => {
    const [age, setAge] = useState("");
    const[item, setItem] = useState(Array);
    const[store, setStore] = useState();
     const[search, setSearch] = useState('');
     const inputVal = useRef("");
     useEffect(() => {
        if(search==='')
        {
            setItem(Array);
          
        }
        else
        {
            const data = Array.filter((Brand) => Brand.brand.toLowerCase().includes(search));
            setItem(data);
            setStore(data);
           
        }
       

      }, [search])


      useEffect(() => {
        if(age!=='')
        {

    
        if(age==='all')
        {
            setItem(Array);
          
        }
        else
        {

            const data = Array.filter((data) => 
            (data.brand) === (age));
            setItem(data);
            setStore(data);
           
        }
    }
       

      }, [age])

      const searchbar =  {
        display :'flex',
        backgroundColor :'red',
        marginLeft: "0",
        width: "100%",
        maxWidth: "300px",
        padding :"9px",
      justifyCcontent:'center',
      alignItems:'center',
        position: 'relative',
        borderRadius:" 4px",
        backgroundColor: "#04AA6D",
        border:'1px solid',
        borderColor:'#fff',
        '&:hover': {
            backgroundColor: "#02AbD",
         
        },
      }
      const input = 
      {
        width: "80%",
        outline: "none",
        borderRadius: "7px",
        border:'none',
        padding:"6px",
      }
       const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 1),
        height: '100%',
       
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        //   transition: theme.transitions.create('width'),
          width: '100%',
        //   [theme.breakpoints.up('sm')]: {
        //     // width: '12ch',
        //     '&:focus': {
        //       width: '20ch',
        //     },
        //   },
        },
      }));

    
   
   

 
const InputEvent = (e)=>
{
    console.log('eeeee', e.target); 
    setSearch(e.target.value);
}
    // functions
    const handleChange = (event) => {
        // let check = event.target.value;
        // setAge(event.target.value);
        console.log(setAge(event.target.value));
        // if (check === 'all') {
        //     setItem(Array);
        // }
        // else {
        //     const data = Array.filter((data) => (data.brand) === (check));
        //     setItem(data);
        //     setStore(data);
        // }
    };
const handleClick=(model)=>
{ 
    console.log(store);
const data= store.filter((data)=> (data.year)===(model)&&(data.brand)!==('all'));
 setItem(data);
} //--function
// searchbar

//-- searchbar


// styling

const SelectStyle =
{
    borderRadius:" 12px",
}
const labelStyle = {

    color:'white',
    fontSize:'30px'
}
const LabelStyle = {
textAlign:'center',
padding:'8px',
margin:'10px',
    color:'#fff',
    fontSize:'30px',
    backgroundColor: "#04AA6D",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'10px',
}
const displayresult = 
{
    display: "flex",
    justifyContent: "space-around",
    flexWrap : 'wrap',
}
const ImageAdjust ={
    width:'300px',
    height:'150px',
    objectFit :'contain',
   
}

const BootstrapButton = styled(Button)({
    
    textTransform: 'none',
    borderRadius: "32px",
    color:'black',
    fontSize:'30px',
   
    fontFamily: [
     
      'sans-serif',
     
    ].join(','),
    '&:hover': {
     
        boxShadow: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.14)',

      borderRadius: "32px",
      backgroundColor: "#04AA6D",
      color:'#fff',

    },
    '&:active': {
      boxShadow: 'none',
      borderRadius: "32px",
      backgroundColor: "#04AA6D",
      color:'#fff',
      boxShadow: '0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.14)',

    },
  });
 
const CardStyle = styled(Card)({
  
    color:'white',
    boxShadow: '0 2px 4px -1px rgba(4,170,109,.2), 0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.14)',
color:"#04AA6D",

})
const maindiv = 
{
    display:"flex",
    alignItems:"center",
    // display:"flex",
}
const buttoncontainer = {
    alignItems: "center",
    display: "flex",
    flexDirection: 'column',
    justifyCcontent: "spaceEvenly",
  
}
// -- styling
    return (
        <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar  sx={{ background:'#04AA6D' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
         Find your car
          </Typography>
    <div style={searchbar}>
    <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <input  style={input} type="text" placeholder="Search.. " 
            value = {search}
            onChange = {InputEvent} />
    </div>

        </Toolbar>
      </AppBar>
    </Box>
        <div style={buttoncontainer}>

            <div className='dropdiv'>
                {/* <h1>{age}</h1> */}
                <Box sx={{ '& label': { m: 3 } }}>
                <label style = {labelStyle} for="cars">Filter by brand:</label>
                </Box>
                <Box sx={{ '& select': { m: 3 ,maxWidth:340 ,height:40, minWidth:192    
  
       } }}>
                <select  style = {SelectStyle} value={age}  onChange={handleChange}
              
               >
                 {/* value={age} */}
                    <option value="all">All</option>
                    <option value="ferrari">Ferrari</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="bmw">BMW</option>
                </select>
                </Box>
                </div>
            <Box sx={{ '& button,label': { marginTop:2,marginBottom:2,} }}>
            <div style={maindiv}>
                <label style = {LabelStyle} for="cars">Filter by year:</label>
               
                <BootstrapButton   size="large"  onClick={() => {
  handleClick('2018');
  }} variant="text">2018</BootstrapButton>
                <BootstrapButton    size="large" onClick={() => {
    handleClick('2019'); 
  }}  variant="text">2019</BootstrapButton>
                <BootstrapButton  size="large" onClick={() => {
    handleClick('2020');
  }} variant="text">2020</BootstrapButton>
  </div>
      </Box>
                </div>
                <div   style = {displayresult}>
                    { 
                    item.length>0?(
                    
                        item.map((elem) =>
                        (
                            // <h1>{elem.year},{elem.id},{elem.img},{elem.brand}</h1>
                            // <Box sx={{ '& Card': { m: 5 } }}>
                        <CardStyle     sx={{ maxWidth: 355, m:3, padding:1, }}>
                            <CardActionArea>
                             
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {elem.year}
                                </Typography>
                                <Typography gutterBottom variant="h5" component="div">
                                {elem.brand}
                                </Typography>
                                {/* <Typography variant="body2" color="text.secondary">
                                  Lizards are a widespread group of squamate reptiles, with over 6,000
                                  species, ranging across all continents except Antarctica
                                </Typography> */}
                              </CardContent>
                              <CardMedia
                              style={ImageAdjust}
                                component="img"
                            //    width="200"
                            //    height="150"
                                image={elem.img}
                                alt="green iguana"
                                
                              />
                            </CardActionArea>
                          </CardStyle>
                            //  </Box>
                        )
                        )
                  
                    ):
                    (
<h1>result no found</h1>

                    )
                }
                </div>
        </>
    )
}
export default Buttons
