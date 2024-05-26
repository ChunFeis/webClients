import { Component, OnInit } from '@angular/core';
import { BookListingService } from '../book-listing.service';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
@Component({
  selector: 'app-book-listing',
  templateUrl: './book-listing.component.html',
  styleUrls: ['./book-listing.component.css']
})
export class BookListingComponent implements OnInit {
  public bookList: Array<any>;

  newBookForm: FormGroup;
  isSubmitted  =  false;
  updateBookForm: FormGroup;

  constructor(private bookListingService: BookListingService, private formBuilder: FormBuilder) { 
    bookListingService.retrieveAllBooks().subscribe((data: any) => this.bookList = data);
  }

  ngOnInit(): void {
    this.newBookForm  =  this.formBuilder.group({
      title: ['', Validators.required],
      authors: ['', Validators.required],
      coverImage: ['', Validators.required]

  });
  this.updateBookForm = this.formBuilder.group({
    id: [''],
    title: ['', Validators.required],
    authors: ['', Validators.required],
    coverImage: ['', Validators.required]
  });

  }
  public onAdd(){
    console.log(this.newBookForm.value);
    this.bookListingService.addNewBook(this.newBookForm.value).subscribe(res => {
      console.log('Book Created');
      location.reload();
    })
  }
  public onDelete(book){
    this.bookListingService.deleteBookById(book).subscribe(res => {
      console.log('Book Deleted');
      location.reload();
    })
  }

  public onUpdateModal(book) {
    this.updateBookForm.patchValue(book);
  }


  public onUpdate(){
    this.bookListingService.updateBookById(this.updateBookForm.value).subscribe(res => {
      console.log('Book Updated');
      location.reload();


    })}
}
