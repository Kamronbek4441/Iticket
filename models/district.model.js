module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  District.associate = (models) => {
    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    District.hasMany(models.CustomerAddress, {
      foreignKey: "district_id",
      as: "district_customerAddress",
    });
    District.hasMany(models.Venue, {
      foreignKey: "district_id",
      as: "district_venue",
    });
  };

  return District;
};
