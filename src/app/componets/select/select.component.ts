import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from 'src/app/models/category.model';
import { AppService } from 'src/app/services/app.service';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit{

  formCD!: FormGroup;

  categories: ICategory[] = []

  constructor(protected activatedRoute: ActivatedRoute, private service: AppService, private fb: FormBuilder){}

  ngOnInit() {
    this.buildForm();

    this.activatedRoute.data.subscribe(({ categories }) => {
      if(categories.body){
        this.categories = categories.body.trivia_categories;
        console.log('categories: ', categories);
        console.log('this.categories: ', this.categories);
      }

    });
  }

  onSubmit() {

  }

  private buildForm() {
    this.formCD = this.fb.group({
      category: ["", Validators.required],
      difficulty: ["", Validators.required]
    });
  }

}
