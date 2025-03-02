module.exports = (sequelize, DataTypes) => {
  const VenueType = sequelize.define("VenueType", {
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

  VenueType.associate = (models) => {
    VenueType.hasMany(models.Venue, {
      foreignKey: "venue_type_id",
      as: "venue_type_venue",
    });
  };

  return VenueType;
};
