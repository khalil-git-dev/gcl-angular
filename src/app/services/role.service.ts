import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RoleService {

  constructor(private http: HttpClient) { }
  
  getRoles() {
    return this.http.get(`${environment.apiUrl}/api/roles`);
  }

  getRoleByLibelle(libelle){
    return this.http.get(`${environment.apiUrl}/api/getRoleByLibelle/`+ libelle);
  }

}
