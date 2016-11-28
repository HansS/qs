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


//const quizzesRef = database().ref('quizzes');
const questionsRef = database().ref('questions');
const answersRef = database().ref('answers');

//var quizQuestionsKeys = [];
var questionAnswersKeys = [];



// create quizzes
/*
dbData.quizzes.forEach(function (quiz) {
    const quizRef = quizzesRef.push({
        title: quiz.title,
        description: quiz.description
    });
*/
console.log('Export beginn...');
// create questions
dbData.questions.forEach(question => {
    console.log("question:", question.title);
    const questionRef = questionsRef.push({
        number: question.number,
        title: question.title,
        description: question.description

    });

    // create quizQuestionsKeys list
    //quizQuestionsKeys.push(questionRef.key);
    //console.log('create quizQuestionsKeys',quizQuestionsKeys);
    console.log(questionRef.key);

    // create answers
    question.answers.forEach(answer => {
        console.log('answer:', answer.title);
        const answerRef = answersRef.push({
            title: answer.title,
            description: answer.description,
            questionKey: questionRef.key
        });
        console.log('answerRef.Key:', answerRef.key);
        // create quizQuestionsKeys list
        //console.log('answerRef.key',answerRef.key);
        questionAnswersKeys.push(answerRef.key);


    }) ;// for each answer

    //console.log('questionanswersKeys',questionanswersKeys);
    // create association question_answers
    const answersAssociation = database().ref('question_answers');
    const question_answers = answersAssociation.child(questionRef.key);
    questionAnswersKeys.forEach(answerKey => {
        //console.log('adding answer keys to question_answers');
        const answerquestionAssociation = question_answers.child(answerKey);
        answerquestionAssociation.set(true);
    });
    // empty answer keys for this question
    questionAnswersKeys = [];

}); // for each question


 // for each quiz question

    // create association quizquestions
    //const association = database().ref('quiz_questions');
    //const quizquestions = association.child(quizRef.key);

    //quizQuestionsKeys.forEach(questionKey => {
        //console.log('adding question keys to quizquestions ');
   //     const questionquizAssociation = quizquestions.child(questionKey);
   //     questionquizAssociation.set(true);
   // });



//}); // for each quiz






