import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modif-user',
  templateUrl: './modif-user.component.html',
  styleUrls: ['./modif-user.component.scss']
})
export class ModifUserComponent implements OnInit {

  currentUser: any;
  formUpdateUser: FormGroup;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCurrentUser(this.route.snapshot.paramMap.get('id'));

    this.formUpdateUser = new FormGroup({
      id: new FormControl(''),
      iduser: new FormControl(''),
      prenom: new FormControl(''),
      nom: new FormControl(''),
      email: new FormControl(''),
      login: new FormControl(''),
      typeFor: new FormControl(''),
      type: new FormControl(''),
      telephone: new FormControl(''),
      adresse: new FormControl(''),
      matieres: new FormControl(''),
      typeAgent: new FormControl(''),
      service: new FormControl(''),
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
  //
  upDateUser() {
    const donnees = {
      prenom: this.formUpdateUser.value.prenom,
      nom: this.formUpdateUser.value.nom,
      telephone: this.formUpdateUser.value.telephone,
      role: this.currentUser.role,
      type: this.currentUser.type,
      email: this.formUpdateUser.value.email,
      adresse: this.formUpdateUser.value.adresse,
      typeFormateur: this.formUpdateUser.value.typeFor,
      matieres: this.formUpdateUser.value.matieres,
      typeAgent: this.formUpdateUser.value.typeAgent,
      service: this.formUpdateUser.value.service,
    };
    // console.log(donnees);

    this.userService.upDateUser(this.currentUser.id, donnees)
    .subscribe(
      data => {
        if(data['status'] == 201) {
          this.router.navigate(['list-user']);
          return;
        }
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
