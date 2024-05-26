import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListingComponent } from './book-listing/book-listing.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListingService } from './book-listing.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListingComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BookListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
