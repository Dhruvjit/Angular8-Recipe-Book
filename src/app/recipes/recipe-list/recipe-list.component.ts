import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  /* recipes here consist of arrays of different objects of recipeModel */
  recipes: RecipeModel[] = [
    new RecipeModel(
      'A Test Recipe',
      'A test Description',
      'https://www.freeiconspng.com/uploads/notebook-recipe-icon-18.png')
  ];
  constructor() { }
  ngOnInit() {
  }

}
