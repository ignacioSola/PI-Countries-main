const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      unique: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    continente:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion:{
      type: DataTypes.STRING,
    },
    area:{
      type: DataTypes.FLOAT,
    },
    population:{
      type: DataTypes.INTEGER,
    }
  });
};

// [ ] País con las siguientes propiedades:
// ID (Código de 3 letras) *
// Nombre *
// Imagen de la bandera *
// Continente *
// Capital *
// Subregión
// Área
// Población