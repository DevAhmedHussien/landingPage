
import * as React from 'react';
import { useState } from 'react';

import { Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './section.css';

export default function Selectbuttom() {
    const [isClicked, setIsClicked] = useState(false);
const handleChangeClass = ()=>{
    setIsClicked(!isClicked);
    
}
const checkboxStyles = {
    color:'#002B45 !important',
    
    borderRadius: '3px',
    };

    const labelStyles = {
        // background:'red',
        color:'#002B45',
        fontFamily: 'Open Sans !important',
        fontSize: '16px !important',
        fontWeight: 400 ,
        lineHeight: '22px !important',
        letterSpacing: '0em !important',
        textAlign: 'left !important',
    };
    const ControlLabel = {
        width: '105px',
        height: '22px',
        margin:'7px',
        // top: '1604px',
        // left: '170px',
        borderRadius: '3px',

    };

return (
    <>
    
<div >
    <button className={isClicked ? 'buttonSelectOne':'buttonSelectNone'}  onClick={handleChangeClass}>
        ПЛАНИРОВКА 
    </button>
        <div className={isClicked ? 'showingPlan':'showingPlanNone'} style={{}} >
            <FormControlLabel 
                style={ControlLabel}
                    control={<Checkbox style={checkboxStyles} />}
                    label={<span style={labelStyles}>Прямые<sup>100</sup></span>}
            />
            <FormControlLabel
                    style={ControlLabel}
                        control={<Checkbox style={checkboxStyles} />}
                        label={<span style={labelStyles}>Угловые<sup>134</sup></span>}
            />
            <FormControlLabel
                    style={ControlLabel}
                        control={<Checkbox style={checkboxStyles} />}
                        label={<span style={labelStyles}>Cтровом<sup>250</sup></span>}
            />
            <FormControlLabel
                    style={ControlLabel}
                        control={<Checkbox style={checkboxStyles} />}
                        label={<span style={labelStyles}>Трёхъярусные<sup>120</sup></span>}
            />
            <FormControlLabel
                    style={ControlLabel}
                        control={<Checkbox style={checkboxStyles} />}
                        label={<span style={labelStyles}>образные<sup>170</sup></span>}
            />
        </div>
    </div>
    <button className= 'stil'  >
    СТИЛЬ КУХНИ 
    </button>
    <button className= 'cvet'  >
    ЦВЕТ
    </button>
    <button className= 'priminit'  >
    применить
    </button>
    <button className= 'sproc'  >
    сбросить
    </button>
    

</>

);
}