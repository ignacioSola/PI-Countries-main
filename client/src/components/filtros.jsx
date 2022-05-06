import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, filterByName } from "../actions";


export default function Filtros({handleSort}){
    const dispatch = useDispatch();
    const filterCountry = useSelector((state) => state.countries);

    function handleFilterCountry (e){
        dispatch(filterByContinent(e.target.value)) 
    }

    return(
        <div>
            <select onChange={(e) => handleSort(e)} >
                <option >Order</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
            <select onChange={handleFilterCountry}>
                <option value='Continents'>Continets</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Africa'>Africa</option>
                <option value='Oceania'>Oceania</option>
                <option value='Antarctic'>Antarctic</option>
            </select>
            <select>
                <option>Activity</option>
            </select>
        </div>
    )
}