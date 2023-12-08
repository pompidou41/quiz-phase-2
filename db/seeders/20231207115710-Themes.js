/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Elbrus Bootcamp',
          img: '/img/elbrus.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Угадай студента',
          img: '/img/student.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
