import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByContinent, filterByActivity } from "../actions";

export default function Filtros({handleSort},){
    const dispatch = useDispatch();
    const filterCountry = useSelector((state) => state.countries);
    const actividades = useSelector(state => state.activities)

    function handleFilterCountry (e){
        dispatch(filterByContinent(e.target.value)) 
    }

    function handleFilterActivities (e){
        dispatch(filterByActivity(e.target.value))
    }



    return(
        <div>
            <select onChange={(e) => handleSort(e)} >
                <option value='order'>Order</option>
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
            <select onChange={handleFilterActivities}>
                <option>Activity</option>
                {actividades != "No activities"  && actividades.map(e => {
                   return (<option value={e.name} key={e.name}>{e.name}</option>) 
                })}
            </select>
        </div>
    )
}