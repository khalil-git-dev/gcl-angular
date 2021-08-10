import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {
  currentUser: any;
  formUser: FormGroup;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCurrentUser(this.route.snapshot.paramMap.get('id'));

    this.formUser = new FormGroup({
      id: new FormControl(''),
      iduser: new FormControl(''),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      login: new FormControl(''),
      type: new FormControl(''),
      });
  }

  getCurrentUser(id) {
    this.userService.currentUser(id)
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
