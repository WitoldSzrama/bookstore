import { Component, OnInit, Input } from '@angular/core';
import { BookFav } from 'src/app/shared/book-fav.model';
import { Router } from '@angular/router';
import { BookFavService } from 'src/app/shared/book-fav.service';
import { Book } from 'src/app/shared/book.model';


@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  @Input() fav: BookFav;
  constructor(private router: Router, private bookFavService: BookFavService) { }

  ngOnInit() {
    
  }
  moveToBookDetail(){
    this.router.navigate(['/booklist/0'])
  }

  onDelete(book:Book,fav:BookFav){
    this.bookFavService.onDelete(book,fav)
  }
}
