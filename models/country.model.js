module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("Country", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  
   Country.associate = (models) => {
    Country.hasMany(models.CustomerAddress, {
      foreignKey: "country_id",
      as: "country_customerAddress",
    });
   };

  return Country;
};
