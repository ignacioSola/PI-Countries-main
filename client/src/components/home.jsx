import React from "react";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getCountries, filterByName } from "../actions";
import { Link } from "react-router-dom";
import Countries from "./country";
import Search from "./search";
import Filtros from "./filtros";
import Paginado from "./paginado";

export default function Home(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [orden, setOrden] = useState('');
    console.log(allCountries)
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexLastCountry = currentPage * countriesPerPage;
    const indexFirstCountry = indexLastCountry - countriesPerPage;
    const currentCountries = allCountries.slice(indexFirstCountry, indexLastCountry);

    const paginado = (page) => {
        setCurrentPage(page)
    }


    useEffect(() => {
        dispatch(getCountries());
    },[]);

    function handleOnClick(e){
        e.preventDefault();
        dispatch(getCountries())
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(filterByName(e.target.value));
        setCurrentPage(1)
        setOrden(`ordenado ${e.target.value}`);
    }

    return(
        <div>
            <Search/>
            <hr/>
            <button onClick={handleOnClick} >refresh</button>
            <button>
                <Link to={'/activity'}>Create activity</Link>
            </button>
            
            <hr/>
            <Filtros
            handleSort = {handleSort}/>
            <hr/>
            <Paginado
            allCountries={allCountries.length}
            countriesPerPage={countriesPerPage}
            paginado={paginado} />
            <div>
                {currentCountries && currentCountries.map(e => {
                return <Countries
                name= {e.name}
                flag = {e.flag}
                continent = {e.continente}
                key={e.id?e.id:'nnn'}
                id={e.id}
                />
                })}
            </div>
        </div>
    )
}