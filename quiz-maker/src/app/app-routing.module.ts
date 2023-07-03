import {RouterModule, Routes} from "@angular/router";
import {QuizComponent} from "./components/quiz/quiz.component";
import {QuizResultsComponent} from "./components/quiz-results/quiz-results.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent },
  { path: 'results', component: QuizResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
