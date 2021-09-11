/** @format */

const Sequelize = require('sequelize');

let sequelize;
let PORT=3000;
	let DATABASE='questr';
let DATABASE_USER='postgres';
let DATABASE_PASSWORD='';
let DATABASE_URL=';
let DATABASE_PORT='5432';

sequelize = new Sequelize(
			DATABASE,
			DATABASE_USER,
			DATABASE_PASSWORD,
		{
		  host: DATABASE_URL,
		  port: DATABASE_PORT,
		  dialect: 'postgres'
		});



const models = {
  locations: sequelize.import("./location")
};

Object.keys(models).forEach((key) => {
  if ("associate" in models[key]) {
    models[key].associate(models);
  }
});


module.exports = { sequelize };

module.exports = models;
