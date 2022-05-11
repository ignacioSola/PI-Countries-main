import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import './createComponent.css'
import {createActivity, getCountries} from '../actions';


function validate(input){
    let errors = {}
    if(!input.name){
        errors.name = "name is required"
    }
    if(input.difficulty<1 || input.difficulty>5){
        errors.difficulty = "difficulty must be a value between 1 and 5"
    }
    if(!input.difficulty){
        errors.difficulty = "complete difficulty"
    }
    if(!input.duration){
        errors.duration = "complete duration"
    }

    return errors;
}


export default function CreateActivity() {
    const [input, setInput] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season: [],
        idPais: []
    });
    const [errors, setErrors] = useState({})
    const activities = useSelector(state => state.activities);
    const countries = useSelector(state => state.countries2)
    const dispatch = useDispatch();
    

    useEffect(() => {
        if(countries.length === 0){
            dispatch(getCountries())
        }
    },[])

    

    function handleOnChange (e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
    }


    function handleSelect(e){
        setInput({
            ...input,
            idPais: [...input.idPais, e.target.value]
        })    
    }


    function handleSelect2(e){
        setInput({
            ...input,
            season: [...input.season, e.target.value]
        })    
    }

    
    function handleOnSubmit(e){
        e.preventDefault();
        if(!Object.keys(errors).length && input.season.length>0 && input.idPais.length>0){
            dispatch(createActivity(input));
            alert('Activity created')
            setInput({
            name:'',
            difficulty:'',
            duration:'',
            season: [],
            idPais: []
        })
        }
        else{
            alert('complete all fields ')
        }
        
       
    }

    return (
        <div>
            
            <Link to='/home'>
                <button className="btn-atras"> Back </button>
            </Link>
            <form onSubmit={handleOnSubmit} className="cre">
                <div className="div">
                    <label>Name:</label>
                    <input
                      type='text'
                      value={input.name}
                      key='name'
                      name="name"

                      onChange={handleOnChange}
                    />
                    {errors.name && (
                        <p>{errors.name}</p>
                        )}
                </div>
                <div className="div">
                    <label>Difficulty:</label>
                    <input
                      type='number'
                      max={5}
                      min={1}
                      value={input.difficulty}
                      key='difficulty'
                      name="difficulty"
                      onChange={handleOnChange}
                    />
                    {errors.difficulty && (
                        <p>{errors.difficulty}</p>
                        )}
                </div>
                <div className="div">
                    <label>Duration:</label>
                    <input
                      type='text'
                      value={input.duration}
                      key='duration'
                      name="duration"
                      onChange={handleOnChange}
                    />
                    {errors.duration && (
                        <p>{errors.duration}</p>
                        )}
                </div>
                <div className="div">
                    <label>Season:</label>
                    <select onChange={handleSelect2} key='season'>
                        <option></option>
                        <option value='Invierno'>Invierno</option>
                        <option value='Verano'>Verano</option>
                        <option value = 'Primavera'>Primavera</option>
                        <option value='Otoño'>Otoño</option>
                    </select>
                </div>
                 <ul>
                        <li>{input.season.map(e => e + ', ')}</li>
                    </ul>
                <div className="div">
                    <label>Country/ies:</label>
                    <select onChange={handleSelect} key='idPais'>
                        <option></option>
                        {countries.map(e => {
                            return(
                                <option value={e.id} key={e.id}>{e.name}</option>
                            )
                        })
                        }
                    </select>      
                </div>
              
                    <ul>
                        <li>{input.idPais.map(e => e + ', ')}</li>
                    </ul>
                <button type="submit" onClick={handleOnSubmit} className='btn-cre'>Create Activity</button>    
            </form>
            
        </div>
    )
} 
