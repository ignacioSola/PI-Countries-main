const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {

        name:{
            type: DataTypes.STRING,
        },
        difficulty:{
            type: DataTypes.INTEGER,
        },
        duration:{
            type: DataTypes.STRING,
            // defaultValue: '00:00:00',
            // field: 'hour'
        },
        season:{
            type: DataTypes.ARRAY(DataTypes.STRING)
        }
    })
}
