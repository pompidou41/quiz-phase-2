const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ Theme }) {
      this.belongsTo(Theme, { foreignKey: 'themeQuestionId' });
    }
  }
  Question.init(
    {
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      answer: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      themeQuestionId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      ques_img: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      ans_img: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Question',
    }
  );
  return Question;
};
