import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IQuestion, QuestionView, QuizEndData } from 'src/app/models/questions.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnChanges {

  @Input() questions: IQuestion[] = [];
  questionsView: QuestionView[] = [];

  formQuestions!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.reloadQuestionsView();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(){

    if (this.formQuestions.valid) {

      const selectedValues = this.formQuestions.value.questions as string[];

      let resultArr: QuizEndData[] = [];

      for (let index = 0; index < this.questionsView.length; index++) {
        resultArr.push({...this.questionsView[index], selected_answer: selectedValues[index] });
      }

      localStorage.setItem('quizEndData', JSON.stringify(resultArr));

      this.router.navigate(['result']);

    } else {
      console.error("Form is invalid!");
    }
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
  }

  private buildForm() {
    const controlArray: (string | ((control: AbstractControl<any, any>) => ValidationErrors | null))[][] = [];
    this.questions.forEach(() => {
      controlArray.push(["", Validators.required]);
    });

    this.formQuestions = this.fb.group({
      questions: this.fb.array(controlArray, Validators.required)
    });

    // NOT WORK
    // const questionsControl = <FormArray>this.formQuestions.get('questions');
    // this.questions.forEach(question => {
    //   questionsControl.push(["", Validators.required]);
    // });

    console.log(this.formQuestions);
  }

}
