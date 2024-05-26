import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookListingService {
  //declare and initiate the accessPointUrl 
  private headers: HttpHeaders;
  //this URL should be amend to indicate port number and API URI accordingly
  private accessPointUrl: string = 'https://localhost:44368/api/products';

  constructor(private http: HttpClient) {

    //construct a header to ensure all requests are of json type and utf-8 charset
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

   }
     //create function to retrieve books with eStoreService Web API end point
  public retrieveAllBooks() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }
  public retriveBookById(payload){
    return this.http.get(this.accessPointUrl + '/' + payload.id, 
    {headers: this.headers});
}
public addNewBook(payload){
  return this.http.post(this.accessPointUrl, payload, 
  {headers: this.headers});
}
public deleteBookById(payload) {
  return this.http.delete(this.accessPointUrl + '/' + payload.id, 
  {headers: this.headers});
}
public updateBookById(payload) {
  return this.http.put(this.accessPointUrl + '/' + payload.id, payload,
  {headers: this.headers});
}


}

