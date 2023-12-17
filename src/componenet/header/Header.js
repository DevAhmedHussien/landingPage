import { Box, Typography } from "@mui/material";
import { useState ,useRef ,useEffect} from "react";
import logo from '../../images/лого.png';
import imgLocation  from '../../images/locationHeader.png';
import BasicRating from './Rating';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import scrollReveal from "scrollreveal";
import './header.css'
export default function Header(){
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClickedButton, setIsClicked2Button] = useState(true);
    const handleClick = () => {
        setIsClicked(!isClicked);
        };
        const handleClick2 = () => {
            setIsClicked2(!isClicked2);
        };
        const handleClickActive = () => {
            setIsClicked2Button(!isClickedButton);
        };
        const photoRef = useRef(null);
        const iconsRef = useRef(null)
        const buttonRightref = useRef(null)
        useEffect(() => {
            if (photoRef.current )
                scrollReveal().reveal(photoRef.current  , {
                    origin:'top',
                    distance:'40px',
                    duration:2000,
                    delay:200
                });
            }, []);
            useEffect(() => {
                if (iconsRef.current )
                scrollReveal().reveal(iconsRef.current  , {
                    origin:'left',
                    distance:'40px',
                    duration:2000,
                    delay:200
                });
            }, []);
            useEffect(() => {
                if (buttonRightref.current )
                scrollReveal().reveal(buttonRightref.current  , {
                    origin:'top',
                    distance:'40px',
                    duration:2000,
                    delay:200
                
                });
            }, []);
            useEffect(() => {
                if (buttonRightref.current )
                scrollReveal().reveal(buttonRightref.current  , {
                    origin:'top',
                    distance:'80px',
                    duration:2000,
                    delay:200
                
                });
            }, []);
            
    return (
        <>
        <Box component="div" className="header">
            <img src={logo} alt="logo" className="logo" ref ={photoRef} 
            />
            <Box component="div" className = "navLocation" ref = {iconsRef}
            sx={{display:'flex' , justifyContent:'center' , alignItems:'center'}}
            >
                <img src={imgLocation} alt="navLocation" className="imgLocation"/> 
                <div >
                    <Typography variant='h6' className="yandex"> Яндекс Карты</Typography>
                    <div
                    style={{display:'flex' , justifyContent:'center' , alignItems:'center',gap:8}}>
                        <BasicRating/> 
                        <span className='numberRate'> 5,0 </span> 
                    </div>
                    <Typography variant='h6' className="otziv"> 81 отзыв • 100 оценок</Typography>
                    
                </div>
            </Box>
            <div className='container'>
            <Typography variant='h3' className="panner">
                Производство кухонь на заказ
                <span className="pannerSpan"> Анапа, ул. Крылова, д. 27 </span> </Typography>
        
            <IconButton id="pho2"
            onClick={handleClick}
            sx={{width:'36px', height:'36px',
            position:'absolute', top:'45px',left:'1337px',
            backgroundColor: isClicked ? 'black': '#FBF6EF',borderRadius:"50%",
            transition: 'background-color 0.3s ease-in-out',
            '&:hover ': {
                backgroundColor: '#002B45', // Change the background color on hover
            }}}>
                <TelegramIcon  sx={{fontSize:25 ,color: isClicked ? '#FBF6EF' :'#002B45',
                '&:hover': {
                    color: '#FBF6EF', // Change the background color on hover
                }}} /> 
            </IconButton>
            <IconButton   id="pho"
            onClick={handleClick2}
            sx={{width:'36px', height:'36px',position:'absolute', top:'45px',left:'1285px',
            backgroundColor: isClicked2 ? 'black': '#FBF6EF',borderRadius:"50%",
            transition: 'background-color 0.3s ease-in-out',
                '&:hover': {
                    backgroundColor: '#002B45', // Change the background color on hover
                }}}>
                    < CallRoundedIcon  
                    sx={{fontSize:25 ,color :isClicked2 ? '#FBF6EF' :'#002B45',
                    '&:hover': {
                        color: '#FBF6EF', 
                    }}} /> 
            </IconButton>  
            <Typography variant='h6' className= "numberPhone" ref={buttonRightref}
            >  +7 (988)-311-77-88</Typography>
            <button  className={isClickedButton ? "button" : "button-active"}
            onClick={handleClickActive} >Заказать звонок</button>
            </div>
        </Box>
        </>
    )
}