import { Ingrediant } from './../../shared/ingrediant.model';
import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput")  nameInputRef:ElementRef;
  @ViewChild("amountInput") amountInputRef:ElementRef;
  @Output() ingrediantAdded = new EventEmitter<Ingrediant>();


  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingrediant = new Ingrediant(name, amount);
    this.ingrediantAdded.emit(ingrediant);
  }

}
