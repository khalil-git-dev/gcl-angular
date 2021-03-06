import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Role } from './../models/role';
import { User } from './../models/user';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public roleUser: string;
  private currentUserSubject: BehaviorSubject<User>;

  // BehaviorSubject pour le USER objet
  constructor(private httpClient: HttpClient, private authService: AuthService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
  }

  // le getteur du currentUserSubject sous typeScript
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getConnexion(user: User) {
    console.log(environment.apiUrl);
    return this.httpClient.post<User>(`${environment.apiUrl}/login_check`, user).
    // se qui nous permet d'intercepter la requette pour y injecter le token
    pipe(map( user => {
      // console.log("JSON.stringify(user) ==>");
      // console.log(JSON.stringify(user.token));
      //    RECUPERATION DU ROLES UTILISATEUR
      const decoded = jwt_decode(JSON.stringify(user));
      this.roleUser = decoded['roles'][0];
      console.log(decoded['roles'][0]);
     
      //(stocker dans le local storage du navigateur) store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));

  }

  getRoles() {
    return this.httpClient.get<Role>(`${environment.apiUrl}/api/roles`);
  }
  
  logOut() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    //localStorage.clear();
    this.router.navigate(['/login']);
  }

  getToken() {
    return localStorage.getItem('currentUser');
  }


}
