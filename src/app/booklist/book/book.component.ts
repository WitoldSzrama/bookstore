import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/shared/book.model';
import {BookFavService } from '../../shared/book-fav.service'
import { BookFav} from '../../shared/book-fav.model'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book;
  FavList: BookFav[];
  constructor(private bookFavService:BookFavService) { }

  ngOnInit() {
    this.FavList=this.bookFavService.getFav();
  }

    addToFavourite(book:Book,i:number){
      this.bookFavService.getFavBook(book,i);
    }
}
