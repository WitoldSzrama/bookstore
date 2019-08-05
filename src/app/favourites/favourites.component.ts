import { Component, OnInit } from '@angular/core';
import {BookFavService} from '../shared/book-fav.service'
import { BookFav} from '../shared/book-fav.model'
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  fav: BookFav;
  favouriteBooks: BookFav[];
  constructor(private bookFavService:BookFavService ) { }

  ngOnInit() {
    this.favouriteBooks=this.bookFavService.getFav();
  }
  getFav(fav){
    this.fav = fav
  }

}
