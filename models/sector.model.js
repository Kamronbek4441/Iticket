module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define("Sector", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sector_name: {
      type: DataTypes.STRING,
    },
  });

  Sector.associate = (models) => {
    Sector.hasMany(models.Seat, {
      foreignKey: "sector",
      as: "sector_seat",
    });
  };

  return Sector;
};
