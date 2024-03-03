import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  SERVER_URL : string = "https://dummyjson.com/recipes"
  constructor(private http:HttpClient) { }

  getRecipeDetails(){
    return this.http.get(this.SERVER_URL)
  }
  getRecipes(): Observable<any> {
    return this.http.get<any>(this.SERVER_URL);
  }
}
