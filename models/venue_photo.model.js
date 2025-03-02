module.exports = (sequelize, DataTypes) => {
  const VenuePhoto = sequelize.define("VenuePhoto", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
    },
  });

  VenuePhoto.associate = (models) => {
    VenuePhoto.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
  };

  return VenuePhoto;
};
