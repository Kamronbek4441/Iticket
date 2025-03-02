module.exports = (sequelize, DataTypes) => {
  const Seat_Type = sequelize.define("Seat_Type", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
  });

  Seat_Type.associate = (models) => {
    Seat_Type.hasMany(models.Seat, {
      foreignKey: "seat_type_id",
      as: "seat_type_seat",
    });
  };

  return Seat_Type;
};
