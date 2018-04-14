import { Ingrediant } from './../shared/ingrediant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingrediant [] = [
    new Ingrediant ("Apple", 10),
    new Ingrediant ("Tomatos", 5)  
  ]

  constructor() { }

  ngOnInit() {
  }

  onIngrediantAdded(ingrediant:Ingrediant){
    this.ingrediants.push(ingrediant);
  }

}
