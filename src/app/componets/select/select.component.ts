import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/models/category.model';
import { IQuestion, IQuestionResponce } from 'src/app/models/questions.model';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit{

  formCD!: FormGroup;

  categories: ICategory[] = []
  questions: IQuestion[] = []

  constructor(protected activatedRoute: ActivatedRoute, private service: AppService, private fb: FormBuilder){}

  ngOnInit() {
    this.buildForm();

    this.activatedRoute.data.subscribe(({ categories }) => {
      if(categories.body){
        const spinner = document.getElementById('initialSpinner') as HTMLElement | null;
        spinner?.remove();
        this.categories = categories.body.trivia_categories;
      }
    });
  }

  onSubmit() {
    if (this.formCD.valid) {
      this.service.getQuestions(this.formCD.value.category, this.formCD.value.difficulty).subscribe(
        (questions) => {
          if(questions.body){
            this.onSuccessResponse(questions.body);
          }
        },
        (error) => { this.onErrorResponse(error) }
      );

    } else {
      console.error("Form is invalid!");
    }
  }

  protected onSuccessResponse(data: IQuestionResponce) {
    this.questions = data.results;
    console.log('questions: ', data);
    console.log('this.questions: ', this.questions);
  }

  protected onErrorResponse(error: any) {
    console.error('ERROR: ', error)
    // this.router.navigate(['404']);
  }

  private buildForm() {
    this.formCD = this.fb.group({
      category: ["", Validators.required],
      difficulty: ["", Validators.required]
    });
  }

}
