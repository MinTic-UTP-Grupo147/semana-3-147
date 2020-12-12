'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            name: 'carlos',
            email: 'ejemplo@gmail.com',
            password: '$2y$08$T0bEA.VFoFRuqLXBjmqAruGH3N/Xk9OFr18GDcmI9TISxHOjo/WfO',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', null, {});

    }
};