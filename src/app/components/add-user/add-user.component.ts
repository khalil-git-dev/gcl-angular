import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from './../../services/role.service';
import { UserService } from './../../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  currentUser: any;
  formAddUser: FormGroup;
  roles: any;
  allRoles: any;
  
  constructor(private userService: UserService, private roleServices: RoleService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.formAddUser = new FormGroup({
        prenom: new FormControl(''),
        nom: new FormControl(''),
        email: new FormControl(''),
        login: new FormControl(''),
        type: new FormControl(''),
        role: new FormControl(''),
        typeFormateur: new FormControl(''),
        telephone: new FormControl(''),
        adresse: new FormControl(''),
        matieres: new FormControl(''),     
        typeAgent: new FormControl(''),
        service: new FormControl(''),
      });

    // Liste des eleves 
    this.roleServices.getRoles().subscribe(
      data => { 
        this.roles = data['hydra:member'];
        this.allRoles = data['hydra:member'];
        console.log(this.roles);
      }
    ); 

  }

  // ajout utilisateur
  AjoutUser(){
    let roleUser = '';
    this.allRoles.forEach(role => {
      if(role.libelle == this.formAddUser.value.role){
        roleUser = role.id;
      }
    });
    
    const donnees = {
      prenom: this.formAddUser.value.prenom,
      nom: this.formAddUser.value.nom,
      telephone: this.formAddUser.value.telephone,
      role: roleUser,
      email: this.formAddUser.value.email,
      adresse: this.formAddUser.value.adresse,
      typeFormateur: this.formAddUser.value.typeFormateur,
      matieres: this.formAddUser.value.matieres,
      typeAgent: this.formAddUser.value.typeAgent,
      service: this.formAddUser.value.service,
    };
    console.log(donnees);

    this.userService.addUser(donnees)
      .subscribe(
        data => {
          if(data['status'] == 201) {
            this.router.navigate(['list-user']);
            return;
          }
        },
        error => {
          console.log(error);
      }); 
  }


}
