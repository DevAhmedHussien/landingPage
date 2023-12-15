import { Box, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import Selectbuttom from './SelectButtom';
import './section.css'
export default function Section(){
    return(
        <>
        <div className="empty">
        </div>
            <Typography variant="h3" className="titleSection">
                Наши преимущества
            </Typography>
            <Divider light 
            sx={{color:'#002B45',width:'191px',
            height:'1px',position:'absolute',
                top:'1434px',left:'-61px'}} />
                
            <Selectbuttom/>
        </>
    )
}