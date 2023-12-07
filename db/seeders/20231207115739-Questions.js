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
          text: 'Сколько сейчас время?',
          answer: 'время обедать',
          themeQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Ты хочешь кушать?',
          answer: 'да, а ты?',
          themeQuestionId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Кто изображен на фото?',
          answer: 'Даниил',
          themeQuestionId: 2,
          ques_img: './public/img/Q_daniil.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Кто изображен на фото?',
          answer: 'Руслан',
          themeQuestionId: 2,
          ques_img: './public/img/Q_ruslan.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Чьё это рабочее место?',
          answer: 'Рустам',
          themeQuestionId: 2,
          ques_img: './public/img/Q_rustam.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Кому принадлеэит этот ноутбук?',
          answer: 'Дима',
          themeQuestionId: 2,
          ques_img: './public/img/Q_dima.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Чьи это игривые глазки?',
          answer: 'Марина',
          themeQuestionId: 2,
          ques_img: './public/img/Q_marina.png',
          ans_img: './public/img/A_marina.png',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Чьи это прекрасные ровные зубы?',
          answer: 'Дарина',
          themeQuestionId: 2,
          ques_img: './public/img/Q_darina.png',
          ans_img: './public/img/A_darina.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'Кто владелец этих шлепанцев?',
          answer: 'Сергей',
          themeQuestionId: 2,
          ques_img: './public/img/Q_sergei.png',
          ans_img: './public/img/A_sergei.jpg',
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
