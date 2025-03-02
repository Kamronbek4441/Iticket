module.exports = (sequelize, DataTypes) => {
  const TicketType = sequelize.define("TicketType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    color: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    ticket_id: {
      type: DataTypes.INTEGER,
    },
  });

  TicketType.associate = (models) => {
    TicketType.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
  };

  return TicketType;
};
