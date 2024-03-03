import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HttpClient } from '@angular/common/http';

interface Recipe {
  name: string;
  mealType: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  page:number=1
  searchKey: string =""
  recipeImage:string='https://as2.ftcdn.net/v2/jpg/03/19/83/61/1000_F_319836139_aGDo85AN5IHqs3SkKPTswYi0s3icZUh0.jpg'
 recipeDetails:any=[]


 constructor(private api:ApiService ,private http: HttpClient){}
 ngOnInit(): void {
   this.getAllRecipeDetails()
 
  
 }
 getAllRecipeDetails(){
  this.api.getRecipeDetails().subscribe({
    next:(res:any)=>{
      this.recipeDetails = res.recipes
      console.log(res);
    },
    error:(reason:any)=>{
      console.log(reason);
      
    }
  })
}


}
