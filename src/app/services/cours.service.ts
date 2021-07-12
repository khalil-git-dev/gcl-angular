import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }
  
  getProgressCours() {
    return this.http.get(`${environment.apiUrl}/api/getProgressCours`);
  }

  
}
