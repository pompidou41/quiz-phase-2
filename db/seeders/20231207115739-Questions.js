/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          text: 'Какой год сейчас?',
          answer: '2023',
          themeQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Какой год сейчас?',
          answer: '2023',
          themeQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Какой год сейчас?',
          answer: '2023',
          themeQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Questions', null, {});
  },
};
