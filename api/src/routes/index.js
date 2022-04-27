const { Router } = require('express');
const {getCountry, createActivity } = require('./functions');
const {Country, Activity} = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/countries', async (req,res) => {
    const {name} = req.query;
    const check = await Country.count();
    if(check === 0){
        await getCountry();
    }
    const allCountries = await Country.findAll();
    

    // let infoPrincipal = allCountries.map(e => {
    //     return {
    //         name: e.name,
    //         flag: e.flag,
    //         continente: e.continente,
    //     }
    // })
    if(name){
        const paisPorNombre = allCountries.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        if(paisPorNombre.length){
            let nombre = paisPorNombre.map(e => e.name);
            let paisYActividad = await Country.findOne({where:{name:nombre},include: Activity})
            res.send(paisYActividad)
        } 
        else {
            res.send('pais no existente')
        }
    }
    else{
         res.send(allCountries);
    }
   
});

router.get('/countries/:cod', async (req, res, next) => {
    const {cod} = req.params;
    try{


    let detallePais = await Country.findOne({where: {id:cod}, include: Activity});
    if(detallePais){

        res.send(detallePais);
    } 
    else  res.send('id incorrecto');
    }
    catch(error){
        next(error)
    }
    
});

router.post('/activity', async (req, res,next) => {
    const {name, difficulty, duration, season,idPais} = req.body;
    try{
        if(!name){
            res.send('name required for the activity') 
        }
        else{
            const nuevaActividad = await createActivity(name, difficulty, duration, season,idPais);
            res.send(nuevaActividad)
        }
    }
    catch(error){
        next(error)
    }
    
    
})

module.exports = router;
