import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";

export default function Home() {

    return(
        
        <body className="m-0 vh-100 row justify-content-center align-items-center text-align-center p-5">   
           <main className="row d-flex justify-content-center text-align-center align-items-center col-4 m-5 p-5">
               <div className="row d-flex justify-content-center tex-align-center align-items-center m-5 p-5 col-auto">
                 <p>Proyect-Rick & Morty</p>
                  <ul className="row justify-content-between p-5 m-5 text-center">
                      <ListItemHome dato="Characters" infoPath="/characters"/>
                      <ListItemHome dato="Contact" infoPath="/contact"/>
                  </ul>
               </div>
           </main> 
        </body>
     
    )
}



