import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers() {
    return this.http.get(`${environment.apiUrl}/api/getListeUser`);
  }

  currentUser(id){
    return this.http.get(`${environment.apiUrl}/api/getterUser/`+ id);
  }

  addUser(donnees){
    return this.http.post(`${environment.apiUrl}/api/ajoutUser`, donnees);
  }

  upDateUser(id, donnees){
    // console.log(donnees.type);
      if(donnees.type == "Formateur"){
        return this.http.put(`${environment.apiUrl}/api/upDateFormateur/`+ id, donnees);   
      }else if(donnees.type == "Intendant"){
        return this.http.put(`${environment.apiUrl}/api/upDateIntendant/`+ id, donnees);   
      }else if(donnees.type == "Censeur"){
        return this.http.put(`${environment.apiUrl}/api/upDateCenseur/`+ id, donnees);   
      }else if(donnees.type == "Surveillent" || donnees.type == "Surveillent-general"){
        return this.http.put(`${environment.apiUrl}/api/upDateSurveillant/`+ id, donnees);   
      }
  }

  activerDesactiverUser(id){
    return this.http.get(`${environment.apiUrl}/api/activerDesactiverUser/`, id);
  }
}
