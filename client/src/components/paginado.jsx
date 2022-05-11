import React from "react";


export default function Paginado({allCountries, paginado, countriesPerPage}) {
    const paginas = [];
    
    for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++) {
            paginas.push(i);
        }
    return (
        <nav>
            <ul>
                {paginas.map(e => {
                   if(e !== 0){
                       return <button key={e} onClick={() => paginado(e)}>{e}</button>
                   }
                })}
            </ul>
        </nav>
    )
}