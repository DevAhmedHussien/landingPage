
import { Box, Typography } from "@mui/material";
import image from '../../images/image 48.png'
import Divider from '@mui/material/Divider';
import image1 from '../../images/иконка кухни.png'
import image2 from '../../images/иконка сроки.png';
import image3 from '../../images/иконка дизайн проект.png';
import './FirstBody.css'
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";

import CardsBodyFirst from "./CardsBodyFirst";
export default function FirstBody(){
    const photoRef = useRef(null);
    useEffect(() => {
        if (photoRef.current )
            scrollReveal().reveal(photoRef.current  , {
                origin:'left',
                distance:'100px',
                duration:1300,
                delay:200
            });
        }, []);
    return(
    <div className="mani">
        <Box component={'div'} className='greeting'>
            <img src={image} alt="hamada"/>
        </Box>
        <Typography variant="h3" className="titleBody" ref={photoRef}>Наши преимущества</Typography>
        <Divider light id="dividerLine"
        sx={{color:'#002B45',width:'1013px',
        height:'1px',position:'absolute',
            top:'972px',left:'915px'}} />
        <div className="conCbody"> 
        <CardsBodyFirst
        width='370.61px' height='100.01px' top='1050px' left='520px' 
            src={image1}  widthImg= '70px ' heightImg ='70px' topImg= '1051px ' leftImg = '520px'
                title='C 2000 г на рынке' titleSpan='наши кухни выбрали 10 000+ семей'
                widthTitle ='270.02px'  heightTitle='100.01px' topTitle='1050px'leftTitle='620.58px' 
                />
            
            <CardsBodyFirst 
            width='357.17px' height='107.15px' top='1050px' left='966px' 
            src={image2}  widthImg= '60.89px ' heightImg ='70px' topImg= '1051px ' leftImg = '520px'
                title='Сжатые сроки' titleSpan='изготовление кухни от 20 дней '
                widthTitle ='257.17px'  heightTitle='107.15px' topTitle='1050px'leftTitle='620.58px' />
            
            <CardsBodyFirst 
            width='365px' height='71px' top='1050px' left='1398px'  widthImg= '70px' heightImg ='60.67px' topImg= '1051px ' leftImg = '520px'
            src={image3} 
                title='Дизайн проект ' titleSpan='бесплатно за 30 минут'
                widthTitle ='265px'  heightTitle='71px' topTitle='1050px'leftTitle='620.58px' />
        </div>
        
    </div>
    )
}