import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ClasseService } from './../../services/classe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // Liste des utilisateurs
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
        // console.log(data);
      }
    ); 

  }

}
