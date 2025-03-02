module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lang_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Customer.associate = (models) => {
    Customer.hasMany(models.CustomerAddress, {
      foreignKey: "customer_id",
      as: "customer_customerAddress",
    });
    Customer.hasMany(models.Cart, {
      foreignKey: "customer_id",
      as: "customer_cart",
    });
    Customer.hasMany(models.CustomerCard, {
      foreignKey: "customer_id",
      as: "customer_CustomerCard",
    });
    Customer.belongsTo(models.Gender, {
      foreignKey: "gender",
      as: "gender_customer",
    });
    Customer.belongsTo(models.Language, {
      foreignKey: "lang_id",
      as: "lang",
    });
  };

  return Customer;
};
