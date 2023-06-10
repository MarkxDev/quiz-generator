import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IQuestion, QuestionView } from 'src/app/models/questions.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnChanges {

  @Input() questions: IQuestion[] = [];
  questionsView: QuestionView[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.reloadQuestionsView();
  }

  ngOnInit(): void {

  }

  private reloadQuestionsView() {
    this.questionsView = []
    this.questions.forEach(question => {
      const questionView = {
        ...question,
        answers: [
          question.correct_answer,
          ...question.incorrect_answers
        ]
      }
      this.questionsView.push(questionView);
    });
    console.log('this.questionsView: ', this.questionsView);
  }

}
