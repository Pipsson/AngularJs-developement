import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  name:string = "Forex in pips";
  author:string = "Pipsson";
  src:string = "https://images-na.ssl-images-amazon.com/images/I/51ui059Se2L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
  
  name2:string = " Cooking Daily";
  author2:string = " Mama Kawawu";

  isDisabled:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }
name_of_input :string = '';
handleClick(){
  alert("Now we dont have this book!");
}
handleInput(event:any){
  this.name_of_input = event.target.value;
}
}
