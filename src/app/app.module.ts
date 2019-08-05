import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {FormsModule } from '@angular/forms'
import {TooltipModule} from 'ng2-tooltip-directive';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooklistComponent } from './booklist/booklist.component';
import { BookComponent } from './booklist/book/book.component';
import { HomeComponent } from './home/home.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouriteComponent } from './favourites/favourite/favourite.component';
import { AddBookComponent } from './booklist/add-book/add-book.component';
import { HttpClientModule } from  '@angular/common/http';

const appRoutes: Routes= [		
	{ path: '', component:HomeComponent },	
  { path: 'booklist', component:BooklistComponent },
  { path: 'booklist/:id', component:BooklistComponent},
  {path: 'booklist/newbook/:id', component:AddBookComponent},		
  { path: 'favourites', component:FavouritesComponent },
];		

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooklistComponent,
    BookComponent,
    HomeComponent,
    FavouritesComponent,
    FavouriteComponent,
    AddBookComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    TooltipModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
