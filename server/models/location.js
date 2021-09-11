/** @format */

const location = (sequelize, DataTypes) => {
  const Location = sequelize.define("location", {
		id: {type: DataTypes.INTEGER, primaryKey: true},
		user_id: DataTypes.STRING,
		name: DataTypes.STRING,
		organization_id: DataTypes.INTEGER,
		deleted: DataTypes.INTEGER,
  });
  return Location
};

module.exports = location;
