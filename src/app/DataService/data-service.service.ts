import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';
import { User } from '../interface';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private link: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getUsers(): Observable<User> {
    return this.http
      .get<User>(this.link)
      .pipe(
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


  getID(id): Observable<User> {
    return this.http
      .get<User>(this.link + '/' + id)
      .pipe(
        catchError(this.handleError)
      );
  }

}
