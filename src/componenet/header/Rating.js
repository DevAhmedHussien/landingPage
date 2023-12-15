    import * as React from 'react';
    import Box from '@mui/material/Box';
    import Rating from '@mui/material/Rating';
    import Typography from '@mui/material/Typography';
    import './header.css'
    export default function BasicRating() {
    const [value, setValue] = React.useState(5);

    return (
        <Box className="rate"
        sx={{ '& > legend': { mt: 2 },}}
        >
        <Rating name="read-only" 
        value={value} 
        readOnly 
        style={{ color: '#C1AE05' , fontSize: '18.83px'}}/>
        
        </Box>
    );
    }