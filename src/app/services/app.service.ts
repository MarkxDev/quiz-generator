import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoryResource } from '../models/category.model';

export type EntityResponseType = HttpResponse<any>;
export type CategoryResourceResponseType = HttpResponse<ICategoryResource>;

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private resourceCatetegoryUrl = "https://opentdb.com/api_category.php"

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<CategoryResourceResponseType> {
    return this.http.get<ICategoryResource>(this.resourceCatetegoryUrl, { observe: 'response' });
  }
}
