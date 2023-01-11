import {Link} from "react-router-dom";
import './Navegation.css';
export default function Navegation(){
    return(
 
      <nav className="navbar">
               <h1>Rick & Morty</h1>         
                <ul className= "nav justify-content-end p-5">
                  <button clasName="btn btn-success row col-auto my-6 p-5"><Link to="/">Home</Link></button>
                  <button clasName="btn btn-success row col-auto my-6 p-5"><Link to="/characters">Characters</Link></button>
                  <button clasName="btn btn-success row col-auto my-6 p-5"><Link to="/contact">Contact</Link></button>
                </ul>
      </nav>
    )
}