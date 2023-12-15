import './FirstBody.css'
import { Box, Typography } from "@mui/material";
export default function CardsBodyFirst ({width,height,top,left,
        src, widthImg, heightImg , topImg, leftImg,
        title , widthTitle, heightTitle ,topTitle, leftTitle , titleSpan}){
    return (
    <>
    <Box component={'div'} className="card-body"
    sx={{
        backgroundColor: '',
        position: 'absolute',
        width: width,
        height: height,
        top: top,
        left: left,
        display:'flex',
        justifyContent:'center',
        alignItems:'start',
        gap:3
    }}>
        <img src={src} alt=""
        style={{
        backgroundColor: '',
        width: widthImg,
        height: heightImg,
        }} 
        />
        <Typography className="typo" sx={{
            color:'#002B45',
            // position: 'absolute',
            width:widthTitle ,
            height: heightTitle,
            // top:topTitle ,
            // left: leftTitle,
            
        }}>
            {title}
            <span style={{
            }}>
                <br/>{titleSpan}
            </span>
        </Typography>
       
    </Box>
    </>
    )
}