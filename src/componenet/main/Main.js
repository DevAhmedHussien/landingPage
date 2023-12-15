import main from '../../images/main.png'
import Header from '../header/Header';
import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import strelka from '../../images/strelka.png'
import knovka from '../../images/knobka.png'
import FloatingCards from './FloatingCards';
import './main.css'

export default function  Main(){
    return(
        <>
        <Box component={'div'} className = "bgImage" 
            sx={{height:'850.47px',
            width:'1922.79px',
            backgroundImage: `url(${main})`}}>
            <Header/>
            <Divider light sx={{bgcolor:'#FFFFFF',width:'191px',height:'1px',position:'absolute',
            top:'377px',left:'-66px'}} />
            <Typography variant ='h2'
                className="title" >
                    Изготовим роскошную  дизайнерскую кухню 
            </Typography>
            <div className="kawDiv">
                <img src={knovka} alt='knobka'/>
                <Typography variant ='h3' className="secondTtile" >
                    Цена на 12-24% ниже,
                    <span>  чем у посредников</span>
                </Typography>
            </div>
            <Typography variant ='h5' className="thirdTtile" >
                Рассчитаем стоимость кухни-мечты 
            </Typography>
            <img src={strelka} alt='strelka' className='strelka'/>
            <button className="mainButton" >Заказать расчёт</button>
        </Box>
        <FloatingCards width='224px' height='86px' top='179px' left='545px' 
        title='Огромный выбор  бытовой техники'
        topCircle='207px' leftCircle ='753px' />

        <FloatingCards width='266px' height='86px' top='329px' left='958px' 
            title='Изысканный гарнитур  любого размера'
        topCircle='357px' leftCircle ='1208px' />

        <FloatingCards width='230px' height='86px' top='529px' left='890px'
        title='Выдающиеся  сорта древесины'
        topCircle='556px' leftCircle ='1102px' />
        </>
    )
}