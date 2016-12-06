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

//const answersRef = database().ref('answers');

//var quiz_questions = [];


//const coursesRef = database().ref('courses');
//const lessonsRef = database().ref('lessons');


function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

dbData.quizzes.forEach( q => {

  console.log('adding quiz', q.url);

  const quizRef = quizzesRef.push({
      id: q.id,
      title: q.title,
      url: slugify(q.title),
      description: q.description,
      category: q.category,
      level: q.level
  });

  let quiz_questions_keys = [];

  q.questions.forEach((question:any) =>  {

    console.log('adding question ', question.url);

    quiz_questions_keys.push(questionsRef.push({
        number: question.number,
        title: question.title,
        description: question.description,
        answers: question.answers,
        quizId: quizRef.key
      }).key);

  });


  const quiz_questions_join = database().ref('quiz_questions');
  const quiz_questions_join_Keys = quiz_questions_join.child(quizRef.key);

  quiz_questions_keys.forEach(questionKey => {
    const quiz_question_join = quiz_questions_join_Keys.child(questionKey);
    quiz_question_join.set(true);
  }); 


});





