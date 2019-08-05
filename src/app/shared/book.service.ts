import { Injectable,EventEmitter } from '@angular/core';
import {Book} from './book.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class BookService {
  getJsonBooks:{}[]=[];
  localBooks;
  bookListChange = new EventEmitter<Book[]>()
  id = new EventEmitter<number>()
  updBook:Book;
  emitSearch = new EventEmitter<string>()
  bookJson$: Observable<any>
  Books: Book[]=[];
  jasonAdded:boolean=false;
  isLoaded:Boolean=false;
  constructor(private http: HttpClient) {}

  saveToLocal(){
    this.getJsonBooks=[]
    this.Books.forEach(e =>{
      this.getJsonBooks.push(e.getJsonBase())
    }
    )
    localStorage.setItem('books',JSON.stringify(this.getJsonBooks))

  }

  getJSONbook(){
    this.getJsonBooks=[]
    this.bookJson$ = this.http.get('../../assets/Json/books.json');
    this.bookJson$
    .subscribe(data=>{
    data.books.forEach(book => {
      this.Books.push(new Book(book.title,book.author,book.description,book.price))
      
    });     
  },
  error => console.log("Error: ", error),
  () => this.isLoaded=true)
    
  }

  getLocalBook(){
    this.Books=[]
    this.localBooks= JSON.parse(localStorage.getItem('books'))
    this.localBooks.forEach(book => {
      this.Books.push(new Book(book.title,book.author,book.description,book.price))
    });
    
  }


  getBooks(){
   
    if(localStorage.getItem('books'))
    {
      this.getLocalBook()
    }else{

      if(this.isLoaded){
        this.saveToLocal()
         if(localStorage.getItem('books')==null){
            this.saveToLocal()
            this.getLocalBook()
         }else{
            this.getLocalBook()
            this.saveToLocal()
         }
       }else{
          this.getJSONbook()
       }

    }

   
    return this.Books
  }

  addBook(book:Book){
    this.Books.push(new Book(book.title,book.author,book.description,book.price))
    this.bookListChange.emit(this.Books) 
    this.saveToLocal()
  }

  removeBook(book:Book){
    this.Books = this.Books.filter(e => e!=book)
    this.bookListChange.emit(this.Books)
    this.saveToLocal()
  }


  UpdatedBook(book:Book,id:number){
    this.Books[id]=new Book(book.title,book.author,book.description,book.price);
    this.bookListChange.emit(this.Books);
    this.updBook=book;
    this.saveToLocal()
  }

}
