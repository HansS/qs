import { HomeComponent } from './home/home.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { Route} from '@angular/router';
 

export const routerConfig : Route[] = [
    { path:'home',component: HomeComponent},
    {
        path: 'questions',
        children: [
            {
                path: ':id',
                children: [
                    {
                        path: '',
                        component: QuestionDetailsComponent
                    },
                    {
                        path: 'new',
                        component: NewQuestionComponent
                    }
                ]
            },
            {
                path: '',
                component: HomeComponent
            },
            { path:'**',redirectTo: 'questions', pathMatch: "Full"}
        ]
    }
    /*
    {
      path: 'lessons/:id',
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
              component: LessonDetailComponent,
              canActivate: [AuthGuard]
          }
      ]
    }
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
    */
];
