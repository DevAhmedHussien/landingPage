
import { Box, Typography } from "@mui/material";
import Image from '../../images/image 48.png'

import './FirstBody.css'
export default function FirstBody(){
    return(
        <>
        <Box className='greeting'>
            <img src={Image} alt='image'/>
        </Box>
        </>
    )
}