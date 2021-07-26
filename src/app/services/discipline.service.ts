import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisciplineService {

  constructor(private http: HttpClient) { }
  
  getDisciplinesFormateur(idFormateur) {
    return this.http.get(`${environment.apiUrl}/api/listDisciplineByFormateur/` + idFormateur);
  }
  //  
  getAllDiscipline() {
    return this.http.get(`${environment.apiUrl}/api/getAllDiscipline`);
  }


}
