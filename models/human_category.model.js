module.exports = (sequelize, DataTypes) => {
  const Human = sequelize.define("Human", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    Start_age: {
      type: DataTypes.INTEGER,
    },

    Finish_age: {
      type: DataTypes.INTEGER,
    },

    gender_id: {
      type: DataTypes.INTEGER,
    },
  });

  Human.associate = (models) => {
    Human.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
    Human.hasMany(models.Event, {
      foreignKey: "human_category_id",
      as: "human_category_event",
    });
  };

  return Human;
};
