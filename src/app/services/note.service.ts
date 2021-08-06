import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }
  
  visualiserNotesSemestrielEleve(donnees) {
    return this.http.post(`${environment.apiUrl}/api/visualiserNotesEleveParSemestre`, donnees);
  }

  elevesEvaluation(id){
    return this.http.get(`${environment.apiUrl}/api/getElevesEvaluation/`+ id);
  }

  allEvaluation(){
    return this.http.get(`${environment.apiUrl}/api/getAllevaluation`);
  }

  reportageNoteEleves(){
    
  }


}
