import photo from '../../images/Rectangle 4381 (1).png'
import Divider from '@mui/material/Divider';
import './cards.css'
export default function Cards({top,left}){
    return(
        <div className='mainCards'style={{
            top:top,
            left:left
        }} >
            <div className="cards">
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
                            sx={{color:'#002B45',width:'53px',transform:"rotate(90deg)", marginTop: '50px',
                            height:'1px'}} />
                        <h1> Стандарт <br/>
                        <span>
                            217 000 р.
                        </span>
                        </h1>
                        <Divider light 
                            sx={{color:'#002B45',width:'53px',transform:"rotate(90deg)",marginTop: '50px',
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
                    <buttom  className='buttons_1'> Подробнее </buttom>
                    <buttom className='buttons_2'> Расчет стоимости </buttom>
                </div>
            </div>
        <div className="imagesContaine">
            <img src={photo }alt=''/>
            <div className="footer">
            </div>
        </div>
    </div>
    )
}