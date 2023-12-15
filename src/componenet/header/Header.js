import { Box, Typography } from "@mui/material";
import logo from '../../images/лого.png';
import imgLocation  from '../../images/locationHeader.png';
import BasicRating from './Rating';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './header.css'
export default function Header(){
    return (
        <>
        <Box component="div" className="header">
            <img src={logo} alt="logo" className="logo"/>
            <Box component="div" className = "navLocation" 
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
            <Typography variant='h3' className="panner">
                Производство кухонь на заказ
                <span className="pannerSpan"> Анапа, ул. Крылова, д. 27 </span> </Typography>
        </Box>
            <IconButton sx={{width:'36px', height:'36px',position:'absolute', top:'45px',left:'1337px',
                background:'white',borderRadius:"50%"}}>
                    <TelegramIcon  sx={{fontSize:25 ,color:'#002B45'}} /> 
            </IconButton>
            <IconButton sx={{width:'36px', height:'36px',position:'absolute', top:'45px',left:'1285px',
                background:'white',borderRadius:"50%"}}>
                    < CallRoundedIcon  sx={{fontSize:25 ,color:'#002B45'}} /> 
            </IconButton>  
            <Typography variant='h6' className="numberPhone">  +7 (988)-311-77-88</Typography>
            <button variant="outlined" className="button" >Заказать звонок</button>
           
        </>
    )
}