import './Filters.css';
export default function Filters({nombreFiltro,datoFiltro,muestraValor}){
   
  return(
     <div className="area form-check form-switch m-4">
         <input Class="bttn form-check-input" type="checkbox" role="switch"id={datoFiltro} value={datoFiltro} onChange={muestraValor}/>
         <label className="form-check-label" htmlFor={nombreFiltro}>{nombreFiltro}</label>
     </div>       
    )
}