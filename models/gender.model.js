module.exports = (sequelize, DataTypes) => {
  const Gender = sequelize.define("Gender", {
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

  Gender.associate = (models) => {
    Gender.hasMany(models.Customer, {
      foreignKey: "gender",
      as: "gender_customer",
    });
    Gender.hasMany(models.Human, {
      foreignKey: "gender_id",
      as: "gender_humanCategory",
    });
  };

  return Gender;
};