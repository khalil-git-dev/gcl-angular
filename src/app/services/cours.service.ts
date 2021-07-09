import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }
  
  getRequestHeader(){
    let headers = new HttpHeaders({
      'Content-type': 'application/json; ' + 'charset=utf-8',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('currentUser')),
      });
    return headers;
  }
  
  getProgressCours(headers) {
    return this.http.get(`${environment.apiUrl}/api/getProgressCours`, {headers: headers});
  }

  
}
