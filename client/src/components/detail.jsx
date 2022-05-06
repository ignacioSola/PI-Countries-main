import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {detail} from '../actions';

export default function Detail(){
  const dispatch = useDispatch();
  const detalle = useSelector(state => state.detalle);

console.log(detalle)
  const {id} = useParams();
  console.log(id)
  useEffect(() => {
    dispatch(detail(id));
  },[]);

  return(
      <div>
         <img src={detalle.flag}/> 
        <h3>{detalle.name}</h3>
        <h3>{detalle.capital}</h3>
        <h3>{detalle.continente}</h3>
        <h3>{detalle.subregion}</h3>
        <h3>Area: {detalle.area} km</h3>
        <h3>Population: {detalle.population}</h3>
        <h3>Activities: {detalle.Activities}</h3>
      </div>
  )
}     