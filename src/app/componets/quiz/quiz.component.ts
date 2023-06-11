import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { IQuestion, QuestionView } from 'src/app/models/questions.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnChanges {

  @Input() questions: IQuestion[] = [];
  questionsView: QuestionView[] = [];

  formQuestions!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.reloadQuestionsView();
  }

  ngOnInit(): void {
    this.buildForm();
  }
  onSubmit(){

    if (this.formQuestions.valid) {

      console.log(this.formQuestions);
      console.log(this.formQuestions.value.questions);
      console.log(this.formQuestions.get('questions'));

      const selectedValues = this.formQuestions.value.questions as string[];
      const questionsControl = <FormArray>this.formQuestions.get('questions');

      for (let index = 0; index < this.questions.length; index++) {
        const selectedAnswer = selectedValues[index];
        const correctAnswer = this.questions[index].correct_answer;

        if(selectedAnswer != correctAnswer ){
          const buttonToggleGroup = document.querySelector(`mat-button-toggle-group[ng-reflect-name='AnswersGroup${index}']`) as HTMLElement;
          console.log('buttonToggleGroup: ', buttonToggleGroup);
          buttonToggleGroup.classList.add('incorrect');
          const correctButtonToggle = buttonToggleGroup.querySelector(`mat-button-toggle[ng-reflect-value='${correctAnswer}']`) as HTMLElement;
          correctButtonToggle.classList.add('correctAnsware');
        }

      }


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
