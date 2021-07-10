import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvenmentService {

  constructor(private http: HttpClient) { }
  
  
  
  getEvenementFuture() {
    return this.http.get(`${environment.apiUrl}/api/getEvenementFuture`);
  }

}
