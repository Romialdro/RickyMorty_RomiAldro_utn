import {useState} from 'react';
import "./Card.css";


export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);

    const mostrar =()=>{
        console.log(info)
        setOcultar(false) 
    }

    const ocularInfo=()=>{
        setOcultar(true) 
    }

    return(
        <div className='card container d-flex row justify-content-center align-items-center col-3 vh-20 m-5 p-2 text-center '>
             <img className='img-fluid text-center d-block' src={info.image} alt={info.name}/>
             <div className="personajes" >
                  <h2>{info.name}</h2>
                  <button onClick={mostrar} className={ocultar === true ?"btn btn-success":"d-none"}>Show More..</button> 
             </div>
              {ocultar ===false?
                 <div className="personajes-2 container justify-content-center text-center ">
                     <button className="btn btn-primary btn-sm" onClick={ocularInfo}>X</button>
                     <ul className="list-group-item">
                         <li className="list-group-item text-light">Character Status {info.status}</li>
                         <li className="list-group-item">Species {info.species}</li>
                         <li className="list-group-item">Origin {info.origin.name}</li>
                         <li className="list-group-item">Gender {info.gender}</li>
                     </ul>
                 </div>:''      
                }
        </div>
    )
}