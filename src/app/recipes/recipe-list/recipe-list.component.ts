import { Component } from '@angular/core';

import { Recipe  } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [new Recipe('A Test Recipe' , 'This is simply a test',
   'https://th.bing.com/th/id/OIP.jtsOYO2I5uaO9OXWMIy5CQHaE7?rs=1&pid=ImgDetMain'), new Recipe('A Test Recipe' , 'This is simply a test',
   'https://th.bing.com/th/id/OIP.jtsOYO2I5uaO9OXWMIy5CQHaE7?rs=1&pid=ImgDetMain')];
    
  
}
