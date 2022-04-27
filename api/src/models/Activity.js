const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        // id:{
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     allowNull: false,
        // },
        name:{
            type: DataTypes.STRING,
        },
        difficulty:{
            type: DataTypes.ENUM(["1","2","3","4","5"])
        },
        duration:{
            type: DataTypes.TIME,
            defaultValue: '00:00:00',
            field: 'hour'
        },
        season:{
            type: DataTypes.ENUM(["Verano", "Otoño", "Invierno", "Primavera"])
        }
    })
}

// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)