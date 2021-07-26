import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  constructor(private http: HttpClient) { }
  
  getlistAllEleves() {
    return this.http.get(`${environment.apiUrl}/api/listAllEleves`);
  }

  getEleve(idEleve){
    return this.http.get(`${environment.apiUrl}/api/getEleve/`+ idEleve);
  }

  upDateEleve(id, donnees){
    return this.http.put(`${environment.apiUrl}/api/upDateEleve/`+ id, donnees);   
  }

  changeStatus(id){
    return this.http.get(`${environment.apiUrl}/api/changeStatus/`+ id);   
  }


}
