module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define("Event", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    photo: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.DATE,
    },
    finish_date: {
      type: DataTypes.DATE,
    },
    finish_time: {
      type: DataTypes.STRING,
    },
    info: {
      type: DataTypes.STRING,
    },
    event_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    human_category_id: {
      type: DataTypes.INTEGER,
    },
    venue_id: {
      type: DataTypes.INTEGER,
    },

    lang_id: {
      type: DataTypes.INTEGER,
    },
    release_date: {
      type: DataTypes.DATE,
    },
  });

  Event.associate = (models) => {
    Event.belongsTo(models.EventType, {
      foreignKey: "event_type_id",
      as: "event_type",
    });
    Event.belongsTo(models.Human, {
      foreignKey: "human_category_id",
      as: "human_category",
    });
    Event.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
    Event.belongsTo(models.Language, {
      foreignKey: "lang_id",
      as: "lang",
    });
    Event.hasMany(models.Ticket, {
      foreignKey: "event_id",
      as: "event_ticket",
    });
  };

  return Event;
};
