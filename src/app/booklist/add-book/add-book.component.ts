import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import {BookService} from '../../shared/book.service';
import {Router, ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books:Book[];
  bookIndex:number;
  title:string='';
  author:string='';
  description:string='';
  price:number=null;

  constructor(private bookService:BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.books=this.bookService.getBooks();

    this.bookIndex = this.route.snapshot.params['id'],
      			
    this.route.params			
      .subscribe(		
        (params: Params) => this.bookIndex =params['id'],    	
    )
    if(this.bookIndex>0){
      this.title=this.books[this.bookIndex-1].title
      this.author=this.books[this.bookIndex-1].author
      this.description=this.books[this.bookIndex-1].description
      this.price=this.books[this.bookIndex-1].price
    }			
    
  }


  addNewBook({value,valid}: {value: Book,valid:boolean}){
    if(valid){
      if(this.bookIndex==0){
        this.bookService.addBook(value)
      }else{
        this.bookService.UpdatedBook(value,this.bookIndex-1)
      }  
    }
    this.router.navigate(['/booklist'])

  }
}
