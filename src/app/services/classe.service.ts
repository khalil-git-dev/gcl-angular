import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }
  
  getListeClasses(headers) {
    return this.http.get(`${environment.apiUrl}/api/list_class`, {headers: headers});
  }


}
