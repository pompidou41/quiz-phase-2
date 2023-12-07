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
          text: 'How ?',
          answer: ' ert',
          themeQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Каfhsdf?',
          answer: '2qewrty023',
          themeQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'dsfghj?',
          answer: '4235',
          themeQuestionId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'wADSFGHJGKHLJG',
          answer: '2q543678965423',
          themeQuestionId: 2,
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
