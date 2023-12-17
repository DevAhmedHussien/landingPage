import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Selectbuttom from './SelectButtom';
import './section.css'
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
export default function Section(){
    const photoRef = useRef(null);
    useEffect(() => {
        if (photoRef.current )
            scrollReveal().reveal(photoRef.current  , {
                origin:'top',
                distance:'100px',
                duration:2000,
                delay:200
            });
        }, []);
    return(
        <div className="containerSection">
        <div className="empty">
            <div class="star" id="star1"></div>
            <div class="star" id="star2"></div>
        </div>
            <Typography variant="h3" className="titleSection" ref={photoRef}>
                Наши преимущества
            </Typography>
            <Divider light 
            sx={{color:'#002B45',width:'191px',
            height:'1px',position:'absolute',
                top:'1434px',left:'-61px'}} />
                
            <Selectbuttom/>
        </div>
    )
}