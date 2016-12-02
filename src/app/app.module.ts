import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {MaterialModule} from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { routerConfig } from './app.routing';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionsService } from './questions/questions.service';
import {config} from '../environments/firebase.config';
import { HomeComponent } from './home/home.component';
import { QuestionDetailsComponent } from './question-details/question-details.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionComponent } from './question/question.component';
import { QuestionsListitemComponent } from './questions-listitem/questions-listitem.component';
import { QuestionsSearchComponent } from './questions-search/questions-search.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { QuizzesService } from './quizzes/quizzes.service';

import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionsListComponent,
    HomeComponent,
    QuestionDetailsComponent,
    NewQuestionComponent,
    QuestionComponent,
    QuestionsListitemComponent,
    QuestionsSearchComponent,
    TopMenuComponent,
    QuizzesComponent,
    QuizDetailComponent,
    EditQuestionComponent,
    LoginComponent,
    RegisterComponent,
    QuizQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    AngularFireModule.initializeApp(config),
    MaterialModule.forRoot(),
    CarouselModule
  ],
  providers: [QuestionsService, QuizzesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
