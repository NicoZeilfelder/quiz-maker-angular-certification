import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomQuestion, Question} from "../../../model/quiz.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  @Input()
  get questions(): Question[] {
    return this._questions;
  }

  set questions(value: Question[]) {
    this._questions = value;
    this.customQuestions = value.map((question: Question) => {
      return {
        question: question.question,
        answers: [question.correct_answer, ...question.incorrect_answers],
        correct_answer: question.correct_answer,
        selected_answers: []
      }
    });
  }

  @Output() quizSubmitted: EventEmitter<CustomQuestion[]> = new EventEmitter<CustomQuestion[]>();

  public customQuestions: CustomQuestion[] = [];
  public isValidated: boolean = false;

  private _questions: Question[] = [];

  public selectAnswer(question: string, answer: string): void {
    const customQuestion: CustomQuestion | undefined =  this.customQuestions?.find((c: CustomQuestion) => c.question === question);
    const index: number | undefined = customQuestion?.selected_answers.indexOf(answer);

    if(index !== undefined && index >= 0) {
      customQuestion?.selected_answers?.splice(index, 1)
    }

    if(index === -1) {
      customQuestion?.selected_answers.push(answer);
    }
  }

  public isAnswerSelected(customQuestion: CustomQuestion, answer: string): boolean {
    return customQuestion?.selected_answers.indexOf(answer) >= 0;
  }

  public isAnswerCorrect(customQuestion: CustomQuestion, answer: string): boolean {
    return customQuestion.correct_answer === answer;
  }


  public showSubmitButton(): boolean {
    return this.customQuestions?.length > 0 && this.customQuestions?.every((c: CustomQuestion) => c.selected_answers.length > 0);
  }

  public submitQuiz(): void {
    if(this.showSubmitButton()) {
      this.isValidated = true;
      this.quizSubmitted.emit(this.customQuestions);
    }
  }
}
