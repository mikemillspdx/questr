/** @format */

const uuidv4 = require('uuidv4');

module.exports = {
  Query: {
    locations: async (parent, args, { models }) => {
      console.log(models)
      return await models.locations.findAll({
          where: {
            deleted: 0
          }
        });
    },

    locationsByUserId: async (parent, { id }, { models }) => {
      console.log(models)
      return await models.locations.findAll({
          where: {
            user_id: id
          }
        });
    },
    locationsByOrganizationId: async (parent, { id }, { models }) => {
      console.log(models)
      return await models.locations.findAll({
          where: {
            organization_id: id
          }
        });
    },
    location: async (parent, { id }, { models }) => {
      return await models.locations.findByPk(id);
    }

  },

  Mutation: {
    createNewLocation: async (parent, { name }, { models }) => {
      return await models.locations.create({
        name
      });
    },

    deleteLocation: async (parent, { id }, { models }) => {
      return await models.locations.destroy({
        where: {
          id
        }
      });
    },
    updateLocation: async (parent, { id, name }, { models }) => {
      await models.locations.update(
        {
          name
        },
        {
          where: {
            id: id
          }
        }
      );
      const updatedLocation = await models.locations.findByPk(id, {
      });
      return updatedLocation;
    }
  }
};
