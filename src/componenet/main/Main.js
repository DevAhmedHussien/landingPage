import main from '../../images/main.png'
import Header from '../header/Header';
import { useState ,useRef ,useEffect} from 'react';
import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import strelka from '../../images/strelka.png'
import knovka from '../../images/knobka.png'
import FloatingCards from './FloatingCards';
import scrollReveal from "scrollreveal";
import './main.css'

export default function  Main(){
    const [isClickedButton, setIsClicked2Button] = useState(true);
const handleClickActive = () => {
        setIsClicked2Button(!isClickedButton);
    };
    const buttonRightref = useRef(null);
    const scrollref = useRef(null)
    const ahmedRef = useRef(null)
    const juniorRef = useRef(null)
    useEffect(() => {
        if (buttonRightref.current )
        scrollReveal().reveal(buttonRightref.current  , {
            origin:'right',
            distance:'40px',
            duration:2000,
            delay:200
        
        });
    }, []);
    useEffect(() => {
        if (scrollref.current )
        scrollReveal().reveal(scrollref.current  , {
            origin:'left',
            distance:'40px',
            duration:2000,
            delay:200
        
        });
    }, []);
    useEffect(() => {
        if (ahmedRef.current )
        scrollReveal().reveal(ahmedRef.current  , {
            origin:'right',
            distance:'40px',
            duration:2000,
            delay:200
        });
    }, []);
    useEffect(() => {
        if (juniorRef.current )
        scrollReveal().reveal(juniorRef.current  , {
            origin:'top',
            distance:'80px',
            duration:1300,
            delay:200
        });
    }, []);
    
    return(
        <>
        <Box component={'div'} 
        className ="bgImage" 
            sx={{
            height:'850.47px',
            width:'1922.79px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundImage: `url(${main})`}}>
            <Header/>
            <Divider light sx={{bgcolor:'#FFFFFF',width:'191px',height:'1px',position:'absolute',
            top:'377px',left:'-66px'}} />
            <Typography variant ='h2' ref={juniorRef}
                className="title" >
                    Изготовим роскошную  дизайнерскую кухню 
            </Typography>
            <div className="kawDiv">
                <img src={knovka} alt='knobka'ref={ahmedRef} />
                <Typography variant ='h3' className="secondTtile" ref={scrollref} >
                    Цена на 12-24% ниже,
                    <span> чем у посредников</span>
                </Typography>
            </div>
            <div>
                <Typography variant ='h5' className="thirdTtile" >
                Рассчитаем стоимость кухни-мечты
                </Typography>
                <img src={strelka}ref={buttonRightref} alt='strelka' id='strelka'/>
                <button  className={isClickedButton ? "mainButton" : "mainButton-active"}
                onClick={handleClickActive} 
                >Заказать расчёт</button>
            </div>
        </Box>
        <FloatingCards width='224px' height='86px' top='179px' left='545px' 
        title='Огромный выбор бытовой техники'
        topCircle='207px' leftCircle ='753px' />

        <FloatingCards width='266px' height='86px' top='329px' left='958px' 
            title='Изысканный гарнитур любого размера'
        topCircle='357px' leftCircle ='1208px' />

        <FloatingCards width='230px' height='86px' top='529px' left='890px'
        title='Выдающиеся сорта древесины'
        topCircle='556px' leftCircle ='1102px' />
        </>
    )
}