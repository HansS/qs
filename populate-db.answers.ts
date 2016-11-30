import { Question } from './src/app/question/question.model';
import { database, initializeApp } from "firebase";
import { config } from "./src/environments/firebase.config";
import { dbData } from "./db-data.answers";

/*
console.log("WARNING VERY IMPORTANT - PLEASE READ THIS\n\n\n");
console.log('WARNING Please set your own firebase config on src/environmnents/firebase.config.ts');
console.log('Otherwise you will get permissions errors, because the populate-db script is trying to write to my database instead of yours. ');
console.log('Any issues please contact me, Thanks, Vasco\n\n\n');
*/
initializeApp(config);


const quizzesRef = database().ref('quizzes');

const questionsRef = database().ref('questions');

const answersRef = database().ref('answers');

var quiz_questions = [];
//var question_answers = [];


// create quizzes

dbData.quizzes.forEach(function(quiz) {

    const quizRef = quizzesRef.push({
        title: quiz.title,
        category: quiz.category,
        level: quiz.level
    });




    // create questions
    quiz.questions.forEach(question => {
        console.log("question:", question.title);
        const questionRef = questionsRef.push({
            number: question.number,
            title: question.title,
            description: question.description,
            category: question.category,
            level: question.level
        });

        // create quiz_questions list
        //quiz_questions.push(questionRef.key);
        //console.log('create quiz_questions',quiz_questions);
        console.log(questionRef.key);
        //console.log('question_answers',question_answers);
        // create association question_answers

    // for each quiz question

    // create association quizquestions
    const association = database().ref('question_answers');
    const question_answers = association.child(questionRef.key);

    //console.log('question_answers',question_answers);
/*
    question_answers.forEach(questionKey => {
        console.log('adding ansers keys to question_answers ');
        const questionanswerAssociation = quizquestions.child(questionKey);
        questionanswerAssociation.set(true);
    });
*/
        // empty answer keys for this question
        //question_answers.child = null;

        // create answers
        question.answers.forEach(answer => {
            console.log('answer:', answer.title);
            const answerRef = answersRef.push({
                title: answer.title,
                description: answer.description,
                questionKey: questionRef.key
            });
            console.log('answerRef.Key:', answerRef.key);
            // create quiz_questions list
            //console.log('answerRef.key',answerRef.key);
            question_answers.push(answerRef.key);


        });// for each answer



    }); // for each question


    // for each quiz question

    // create association quizquestions
    const association = database().ref('quiz_questions');
    const quizquestions = association.child(quizRef.key);

    quiz_questions.forEach(questionKey => {
        console.log('quiz_questions ');
        const questionquizAssociation = quizquestions.child(quizRef.key);
        questionquizAssociation.set(true);
    });



}); // for each quiz






