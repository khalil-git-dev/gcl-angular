import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  role: any;
  username: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.supAdmin();
    this.proviseur();
    this.getToken();
  }

  supAdmin() {
    if (this.authService.roleUser === 'ROLE_SUP_ADMIN') { return true; } else { return false; }
  }

  proviseur() {
    if (this.authService.roleUser === 'ROLE_PROVISEUR') { return true; } else { return false; }
  }

  getToken() {
    // return localStorage.getItem('currentUser');
    const decoded = jwt_decode(JSON.stringify(localStorage.getItem('currentUser')));
    this.role = decoded['roles'][0].substring(5, decoded['roles'][0].length);
    this.username = decoded['username']; 
    // console.log("decoded['roles'][0]"); 
    // console.log(this.username + ' '+this.role); 
  }

  deconnexion() {
    this.authService.logOut();
    
  }


}
