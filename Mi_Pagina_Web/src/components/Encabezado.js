import Triskel from '../assets/img/TriskelEncabezado.jpg';
import {Link} from 'react-router-dom';


function encabezado(){
return(
<header className="encabezado">
    <div id="Triskel">
        <ul>
            <li>
                <Link className="Servicios" to="/servicios">
                    <span>Servicios</span>
                </Link>  
                <a href="/">
                 <img src={Triskel} alt="Triskel" class="TriskelLogo"/>
                </a>  

                <Link className="Quienes" to="/nosotros">
                    <span>Quiénes Somos</span>
                </Link>  
                                      
            </li>
                            
     
            {/* <li><a href="#productos">Contactanos</a></li> */}
       
           
        </ul>

  
   

    </div>
    
 


</header>
)
}
export default encabezado