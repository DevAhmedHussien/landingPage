import Cards from './Cards';
import './cards.css'
export default function CardsMain(){
return(
<>
    <div className="containerCardName">
        <Cards top='1609px' left='150px' classes ='mainCards_1'/>
        <Cards top='1609px'  left = '984px' classes ='mainCards_2'/>
        <Cards top='2093px'  left = '150px' classes ='mainCards_3'/>
        <Cards top='2093px'  left = '984px' classes ='mainCards_4'/>
    </div>
</>
    )
};