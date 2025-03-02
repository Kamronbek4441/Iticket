module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define("Status", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
    },
  });

   Status.associate = (models) => {
     Status.hasMany(models.Booking, {
       foreignKey: "status_id",
       as: "status_booking",
     });
     Status.hasMany(models.Cart, {
       foreignKey: "status_id",
       as: "status_cart",
     });
     Status.hasMany(models.Ticket, {
       foreignKey: "status_id",
       as: "status_ticket",
     });
   };

  return Status;
};
