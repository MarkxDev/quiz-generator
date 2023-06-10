import { Component, Input, OnInit } from '@angular/core';
import { IQuestion } from 'src/app/models/questions.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  @Input() questions: IQuestion[] = [];

  constructor() {}

  ngOnInit(): void {

  }

}
