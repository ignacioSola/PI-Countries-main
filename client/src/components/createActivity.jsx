import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import './createComponent.css'
import {createActivity, getActivities, getCountries} from '../actions'
// import { useHistory } from "react-router";

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
    if(!input.season){
        errors.season = "add season"
    }
    if(!input.idPais){
        errors.idPais = "add country"
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
    const countries = useSelector(state => state.countries)
    const dispatch = useDispatch();
    // const history = useHistory()

    useEffect(() => {
        if(countries.length === 0){
            dispatch(getCountries())
        }
        // dispatch(getActivities());
    },[])

    

    function handleOnChange (e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors({
            ...input,
            [e.target.name] : e.target.value
        })
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
        dispatch(createActivity(input));
        alert('Activity created')
        console.log(input)
        setInput({
            name:'',
            difficulty:'',
            duration:'',
            season: [],
            idPais: []
        })
        // history.push('/home')
    }

    return (
        <div>
            <button>
                <Link to='/home'>Back</Link>
            </button>
            
            <form onSubmit={handleOnSubmit} className="cre">
                <div>
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
                <div>
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
                </div>
                <div>
                    <label>Duration:</label>
                    <input
                      type='text'
                      value={input.duration}
                      key='duration'
                      name="duration"
                      onChange={handleOnChange}
                    />
                </div>
                <div>
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
                <div>
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
            </form>
            <button type="submit" onClick={handleOnSubmit} >Create Activity</button>
        </div>
    )
}