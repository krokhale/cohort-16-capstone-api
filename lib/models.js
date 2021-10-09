const {Sequelize, DataTypes, Model} = require('sequelize');
const {sequelize} = require('../lib/db');
// ORM

class Category extends Model {

}

Category.init({
    // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
        // allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Category', // We need to choose the model name
});

class Question extends Model {

}

Question.init({
    // Model attributes are defined here
    questionTxt: {
        type: 'LONGTEXT',
        // allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Question', // We need to choose the model name
});

Category.hasMany(Question, {foreignKey: 'categoryId'});
Question.belongsTo(Category, {foreignKey: 'categoryId'});

class Answer extends Model {

}

Answer.init({
    // Model attributes are defined here
    answerTxt: {
        type: 'LONGTEXT',
        // allowNull: false
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Answer', // We need to choose the model name
});

Question.hasMany(Answer, {foreignKey: 'questionId'});
Answer.belongsTo(Question, {foreignKey: 'questionId'});




let seedCategories = async () => {
    let categories = await Category.findAll({});
    if(categories.length == 0){
        await Category.create({name: 'Category 1'});
        await Category.create({name: 'Category 2'});
        await Category.create({name: 'Category 3'});
        await Category.create({name: 'Category 4'});
        await Category.create({name: 'Category 5'});
    }
}


seedCategories()


sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. Please use only in localhost. I have added a condition that checks for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequelize.sync({force: true});
// }

module.exports = {
    // Portfolio, Wallet
    Category, Question, Answer
};
