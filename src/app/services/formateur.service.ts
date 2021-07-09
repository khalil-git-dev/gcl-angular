import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) { }
  
  getListeFormateurs(headers) {
    return this.http.get(`${environment.apiUrl}/api/allFormateur`, {headers: headers});
  }
}
