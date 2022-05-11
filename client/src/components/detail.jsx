import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {detail} from '../actions';
import './detailComponent.css'

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
      <Link to='/home'>
        <button className="button"> Back </button> 
      </Link>
      
      <div className="det">
        <img src={detalle.flag} className='d-flag'/> 
        <h3>{detalle.name}</h3>
        <h3>{detalle.capital}</h3>
        <h3>{detalle.continente}</h3>
        <h3>{detalle.subregion}</h3>
        <h3>Area: {detalle.area} km</h3>
        <h3>Population: {detalle.population}</h3>
        <h3>Activities: {detalle.Activities && detalle.Activities.map(e => e.name+': "Difficulty:'+e.difficulty+', duratyion: '+e.duration+', season: '+e.season+'." ')}</h3>
      </div>
    </div>
      
  )
}     