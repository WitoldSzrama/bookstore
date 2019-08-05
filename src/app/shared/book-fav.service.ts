import { Injectable,OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookFav} from './book-fav.model'
import {BookService} from './book.service'

@Injectable({
  providedIn: 'root'
})
export class BookFavService implements OnInit {
  bookList:Book[]=this.bookService.getBooks()
  localFavBook: BookFav[];
  favouriteBooks: BookFav[]=[
    new BookFav('Fantasy',[]),
    new BookFav('Crime',[]),
    new BookFav('Fiction',[]),
    new BookFav('Horror',[]),
    new BookFav('History',[]),
    new BookFav('Biography',[]),
    new BookFav('Travel',[])
  ]
  

  constructor(private bookService:BookService) { }

  ngOnInit() {
  }

  getFav(){
    if(JSON.parse(localStorage.getItem('favBooks'))){
      this.localFavBook= JSON.parse(localStorage.getItem('favBooks'))
      this.favouriteBooks =this.localFavBook;
    }
    return this.favouriteBooks.slice()
  }

  getFavBook(book: Book,i:number){
    this.favouriteBooks[i].books.push(book);
    localStorage.setItem('favBooks',JSON.stringify(this.favouriteBooks))
  }

  onDelete(book:Book,fav:BookFav){
    this.favouriteBooks.forEach(e =>{
      if(e==fav){
        e.books=e.books.filter(e=>{
          return e!=book
        })
      }
    })
    localStorage.setItem('favBooks',JSON.stringify(this.favouriteBooks))
  }
  

}
