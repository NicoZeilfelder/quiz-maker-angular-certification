import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {QuizService} from "../../services/quiz.service";
import {Category, Difficulty, Question, Quiz, TriviaCategories} from "../../model/quiz.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {
  public categories: Category[] = [];
  public difficulties: string[] = Object.values(Difficulty);
  public questions: Question[] = [];
  public selectedCategory!: number;
  public selectedDifficulty!: string;

  private subscriptions: Subscription[] = [];

  constructor(private quizService: QuizService) {
  }

  public ngOnInit(): void {
    this.subscriptions.push(this.quizService.getCategories()
      .subscribe((data: TriviaCategories) => {
          this.categories = data?.trivia_categories;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription: Subscription) => subscription?.unsubscribe());
  }

  public createQuiz(): void {
    this.subscriptions.push(this.quizService.getQuestions(this.selectedCategory, this.selectedDifficulty)
      .subscribe((data: Quiz) => {
        this.questions = data.results;
    }));
  }

}
