import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizResultsComponent } from './components/quiz-results/quiz-results.component';
import {RouterModule} from "@angular/router";
import {QuizService} from "./services/quiz.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizResultsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
