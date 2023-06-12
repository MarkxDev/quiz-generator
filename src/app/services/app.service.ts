import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICategoryResource } from '../models/category.model';
import { IQuestionResponce, QuizEndData } from '../models/questions.model';

export type QuestionResponseType = HttpResponse<IQuestionResponce>;
export type CategoryResourceResponseType = HttpResponse<ICategoryResource>;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private resourceCatetegoryUrl = "https://opentdb.com/api_category.php"
  private resourceQuestionsUrl = "https://opentdb.com/api.php"

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<CategoryResourceResponseType> {
    return this.http.get<ICategoryResource>(this.resourceCatetegoryUrl, { observe: 'response' });
  }

  public getQuestions(category: number, difficulty: string): Observable<QuestionResponseType> {
    return this.http.get<IQuestionResponce>(`${this.resourceQuestionsUrl}?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`, { observe: 'response' });
  }

  public getResult(): Observable<QuizEndData[]>{
    const quizEndDataStr = localStorage.getItem('quizEndData');
    let quizEndData: QuizEndData[] = [];
    if(quizEndDataStr){
      quizEndData = JSON.parse(quizEndDataStr) as QuizEndData[];
      // localStorage.removeItem('quizEndData');
    }
    return of(quizEndData);
  }
}
