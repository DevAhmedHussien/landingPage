import photo from '../../images/Rectangle 4381 (1).png'
import photo2 from '../../images/Rectangle 4383.png'
import strRight from '../../images/Vector.png'
import Divider from '@mui/material/Divider';
import { useState ,useRef ,useEffect} from 'react';
import scrollReveal from "scrollreveal";
import './cards.css'
const data =[
    {
        id:1,
        src:photo,
        src2:photo2
    },
    {
        id:2,
        src:photo,
        src2:photo2
    },
    {
        id:3,
        src:photo,
        src2:photo2
    },
    {
        id:4,
        src:photo,
        src2:photo2
    },
    {
        id:6,
        src:photo,
        src2:photo2
    },
    {
        id:7,
        src:photo,
        src2:photo2
    },
    {
        id:8,
        src:photo,
        src2:photo2
    },
    {
        id:9,
        src:photo,
        src2:photo2
    },
    {
        id:10,
        src:photo,
        src2:photo2
    },

] 
export default function Cards({top,left,classes}){
const [clickedImage,setIsClickedImg] = useState({
    id:1,
    src:photo,
    src2:photo2
})
const handleClickImage =(item)=>{
    setIsClickedImg(item)
}
const [currentIndex, setCurrentIndex] = useState(1);
const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);  
};
const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 +  data.length) %  data.length);   
};
useEffect(()=>{
    setIsClickedImg({
        id:currentIndex,
        src:photo,
        src2:photo2
    })
},[currentIndex])
const [isClicked, setIsClicked] = useState(true);
const handleClick = () => {
    setIsClicked(!isClicked);
    };
const [isClicked2, setIsClicked2] = useState(true);
const handleClick2 = () => {
        setIsClicked2(!isClicked2);
};
//animation 
const buttonRightref = useRef(null);
    useEffect(() => {
        if (buttonRightref.current )
        scrollReveal().reveal(buttonRightref.current  , {
            origin:'top',
            distance:'40px',
            duration:2000,
            delay:200
        
        });
    }, []);
    const buttonLefttref = useRef(null);
    useEffect(() => {
        if (buttonLefttref.current )
        scrollReveal().reveal(buttonLefttref.current  , {
            origin:'right',
            distance:'40px',
            duration:2000,
            delay:200
        
        });
    }, []);
return(
    <>
< div className={classes} 
style={{
        top: top ,
        left:left
    }} >
        <div className="cards" ref={buttonLefttref}>
            <h1> Кухня 097 минимализм 
            <br/>
                <span>
                Угловая белая кухня со столешницей под бетон
                </span>
            </h1>
                <div className='blocks'>
                        <h1> Эконом <br/>
                            <span>
                                168 000 р 
                            </span> 
                        </h1>
                    <Divider light 
                            sx={{color:'#002B45',width:'53px',transform:"rotate(90deg)", marginTop: '30px',
                            height:'1px'}} />
                        <h1> Стандарт <br/>
                        <span>
                            217 000 р.
                        </span>
                        </h1>
                        <Divider light 
                            sx={{color:'#002B45',width:'53px',transform:"rotate(90deg)",marginTop: '30px',
                            height:'1px'}} />
                        <h1> Премиум <br/>
                        <span>
                        270 000 р.
                        </span>
                        </h1>
                </div>
            <div className='dlina'>
                <h1> Длина кухни:
                        <span>
                        4900 мм
                        </span>
                        </h1>
            </div>
            <div className='buttons'>
                <buttom  className={isClicked ?'buttons_1' :'buttons_1-active'} onClick={handleClick}> Подробнее </buttom>
                <buttom className={isClicked2 ?'buttons_2' :'buttons_2-active'} onClick={handleClick2}> Расчет стоимости </buttom>
            </div>
        </div>
    <div className="imagesContaine" ref={buttonRightref}> 
        <img src={ clickedImage.src }alt=''/>
        <div className="footer" >
            <div className='innerFooter'>
                <div className='numbers'>
                    <h1>0{currentIndex } <span>{data.length+1}</span></h1>
                    <div className='streliky'>
                        <img onClick={handlePrevious} src={strRight} alt='' style={{transform:'rotate(180deg)'}}/>
                        <img  onClick={handleNext}src={strRight} alt=''/>
                    </div>
                    
                </div>
                <div className='photos'>
                    {
                        data.map((img)=>{
                            return(
                                < img key={img.id} src={img.src2} alt=''
                                onClick={()=>{
                                    handleClickImage(img)
                                    setCurrentIndex(img.id)
                                }}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
</div>

    </>
)
}