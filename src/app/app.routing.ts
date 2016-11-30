import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { HomeComponent } from './home/home.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { Route} from '@angular/router';

export const routerConfig : Route[] = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'quizzes',
        children: [
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        component: QuizDetailComponent
                    },
                    {
                        path: 'new',
                        component: NewQuestionComponent
                    }
                ]
            },
            {
                path: '',
                component: QuizzesComponent
            }
        ]
    },
    {
      path: 'questions/:id',
      children: [
          {
              path: 'edit',
              component:  EditQuestionComponent,
              resolve: {
                //lesson: LessonResolver
              }
          },
          {
              path: '',
              component: QuestionDetailsComponent,
              //canActivate: [AuthGuard]
          }
      ]
    },
    {
        'path': 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];





