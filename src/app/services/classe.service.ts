import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }
  // Liste des classes
  getListeClasses() {
    return this.http.get(`${environment.apiUrl}/api/list_class`);
  }

  // Tous les informations de la classe
  getAllInfosByClasse(idClasse) {
    return this.http.get(`${environment.apiUrl}/api/getAllInfosByClasse/` +idClasse);
  }

}
