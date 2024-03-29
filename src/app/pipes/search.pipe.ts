import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(recipeDetails: any[], searchKey: string): any[] {
    const result: any = []
    if (!recipeDetails || searchKey == "") {
      return recipeDetails
    }
    recipeDetails.forEach((item => {
      console.log(item);
      
      // if(item.id!='1'){
        if (item.name?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
          result.push(item)
          
                }
                if (item.cuisine?.trim().toLowerCase().includes(searchKey.trim().toLowerCase())) {
                  result.push(item)
                  
                        }

      // }
    }))
    return result;

  }

}
