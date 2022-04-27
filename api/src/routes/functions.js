const axios = require('axios');
const {Country, Activity} = require('../db');


const getCountry = async () => {
    const countryApi = await axios.get('https://restcountries.com/v3/all');
    const dataPaises = countryApi.data.map( (e) => {
        return {
            id: e.cca3,
            name: e.name.common,
            flag: e.flags[1],
            continente: e.region,
            capital: e.capital? e.capital[0] : 'sin capital',
            subregion: e.subregion,
            area: e.area,
            population: e.population
        }
    });
    await Country.bulkCreate(dataPaises)
    console.log("Se llenó la BBD con países")
    
};

const createActivity = async (name,difficulty, duration,season,idPais) => {
    const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
    });
    await newActivity.addCountry(idPais);
    return newActivity;
}






module.exports = {
    getCountry,
    createActivity
}

