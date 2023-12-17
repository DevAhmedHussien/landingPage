import './FirstBody.css'
import { Box, Typography } from "@mui/material";
import { useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
export default function CardsBodyFirst ({width,height,top,left,
        src, widthImg, heightImg ,
        title , widthTitle, heightTitle , titleSpan}){
    const photoRef = useRef(null);
    const iconsRef = useRef(null)
    useEffect(() => {
        if (photoRef.current )
            scrollReveal().reveal(photoRef.current  , {
                origin:'top',
                distance:'200px',
                duration:2000,
                delay:200
            });
        }, []);
        useEffect(() => {
            if (iconsRef.current )
            scrollReveal().reveal(iconsRef.current  , {
                origin:'left',
                distance:'200px',
                duration:2000,
                delay:200
            });
        }, []);
    return (
    <>
    <Box component={'div'} className="card-body" ref={photoRef}
    sx={{
        // backgroundColor: '',
        // position: 'absolute',
        // width: width,
        // height: height,
        // top: top,
        // left: left,
        // display:'flex',
        // justifyContent:'center',
        // alignItems:'start',
        // gap:3
    }}>
        <img src={src} alt="" ref={iconsRef}
        style={{
        backgroundColor: '',
        // width: widthImg,
        // height: heightImg,
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