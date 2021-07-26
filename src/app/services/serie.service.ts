import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http: HttpClient) { }
  
  // Liste des series
  getAllSeries() {
    return this.http.get(`${environment.apiUrl}/api/series`);
  }

  
}
