import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../model/quiz.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  @Input() questions: Question[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public getAllAnswers(question: Question): string[] {
    return [question.correct_answer, ...question.incorrect_answers];
  }

}
