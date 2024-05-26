import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import book-listing component
import { BookListingComponent } from './book-listing/book-listing.component';

const routes: Routes = [


  {
    path: '', component: BookListingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
