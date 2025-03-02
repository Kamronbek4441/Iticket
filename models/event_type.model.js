module.exports = (sequelize, DataTypes) => {
  const EventType = sequelize.define("EventType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    parent_event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  EventType.associate = (models) => {
    EventType.hasMany(models.Event, {
      foreignKey: "event_type_id",
      as: "event_type_event",
    });
  };

  return EventType;
};
