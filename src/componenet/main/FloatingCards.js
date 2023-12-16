import { Typography,Box } from "@mui/material";
import {  useRef ,useEffect} from "react";
import scrollReveal from "scrollreveal";
export default function FloatingCards({width,height,top,left,title,topCircle,leftCircle,topCircleINNER,leftCircleINNER}){
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
                origin:'right',
                distance:'200px',
                duration:2000,
                delay:200
            });
        }, []);
    return(
        <>
            <Box componenet='div' ref={photoRef}
            sx={{
                position:'absolute',
                width: width,
                height: height,
                padding:'18px 32px 18px 32px',
                borderRadius:'15px',
                background:'linear-gradient(90deg, rgba(0, 43, 69, 0.9) 100%, rgba(0, 43, 69, 1) 0%)',
                top:top,
                left:left,
                zIndex:100,
                transform:'none',
                '&:hover': {
                    // transform: 'rotate(360deg) !important'
                }
                // /,cursor:'pointer'
                }}>
                <Typography variant="h3"  
                sx={{
                    color: '#FFFFFF',
                    position:'absolute',
                    width: '202px',
                    height: '50px',
                    fontFamily: 'Open Sans !important',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '25px',
                    letterSpacing: '0em',
                    textAlign: 'left',
                }}
                >
                    {title}
                </Typography>
            </Box>
            <Box componenet='div' ref={iconsRef}
            sx={{
                position:'absolute',
                width:'31px',
                height:'31px',
                borderRadius:'50%',
                background:'#FBF6EF',
                top:topCircle,
                left:leftCircle,
                zIndex:101,
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
        }}>
                <Box componenet='div' 
                    sx={{
                        width:'19px',
                        height:'19px',
                        borderRadius:'50%',
                        background: '#FFFFFF',
                        opacity:'68%',
                        // top:topCircleINNER,
                        // left:leftCircleINNER,
                        boxShadow: '0px 4px 4px 0px #00000040',
                        zIndex:1000
                        ,cursor:'pointer'}}
                    >
                </Box>
            </Box>
        </>
    )
}