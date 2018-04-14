import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("A Test Recipe1", "This is just a test recipe", "http://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg"),
    new Recipe("A Test Recipe2", "This is just a test recipe", "http://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg"),
    new Recipe("A Test Recipe3", "This is just a test recipe", "http://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg"),
    new Recipe("A Test Recipe4", "This is just a test recipe", "http://www.ndtv.com/cooks/images/kerala.chicken.roast%20%281%29.jpg")
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  OnRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
