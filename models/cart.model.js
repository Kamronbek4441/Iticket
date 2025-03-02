module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    finishedAt: {
      type: DataTypes.DATE,
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
  });
  Cart.associate = (models) => {
    Cart.hasMany(models.Booking, {
      foreignKey: "cart_id",
      as: "cart_booking",
    });
    Cart.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
    Cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Cart.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
  };
  return Cart;
};
