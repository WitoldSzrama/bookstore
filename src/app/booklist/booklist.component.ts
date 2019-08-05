import { Component, OnInit, Input } from '@angular/core';
import {BookService} from '../shared/book.service'
import {Book} from '../shared/book.model'
import {Router, ActivatedRoute, Params} from '@angular/router'

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  Books: Book[];
  selectedBook: Book;
  bookIndex:number=null;
  id:number;
  editBook:Book=new Book('','','',null);
  search:string='';
  title:string;
  author:string;
  description:string;
  price:number;

  constructor(private bookService:BookService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.Books = this.bookService.getBooks();
    
    
    
    this.bookService.bookListChange
    .subscribe(
      (Books: Book[]) =>{
        this.Books = Books
      }
    )
    this.bookService.emitSearch
    .subscribe((search:string)=>this.search=search)

    this.bookIndex = this.route.snapshot.params['id']
      			
    this.route.params			
      .subscribe(		
        (params: Params) => this.bookIndex =params['id'],    	
    )
    if(this.bookIndex!=null){
      this.selectedBook=this.Books[this.bookIndex];
      this.bookIndex=null
    }
  }

    onSelected(book: Book){
      this.selectedBook=book
      window.scrollTo(0,0)
    }

    formCheck(){
      this.router.navigate(['/booklist/newbook/0'])
    }

    removeBook(book:Book){
      this.bookService.removeBook(book)
    }

    updateBook(id:number){
      this.router.navigate(['/booklist/newbook',id+1])
    }
    checkSearch(book:Book){
      if(book.title.toLowerCase().includes(this.search.toLowerCase()) ||
      book.author.toLowerCase().includes(this.search.toLowerCase())){
        return true
      }else{
        return false
      }
    }
}
