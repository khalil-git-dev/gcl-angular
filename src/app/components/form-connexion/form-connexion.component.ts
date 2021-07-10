import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {
  errors: any;
  formConnexion: FormGroup;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.formConnexion = new FormGroup({
      username: new FormControl(''), 
      password  : new FormControl(''), //, [Validators.required, Validators.minLength(6)]
    });
  }

  onConnexion() {
    console.log(this.formConnexion.value);
    const user = {
      username: this.formConnexion.value.username,
      password: this.formConnexion.value.password
    };
    
    // data represente les donnees retourner
    this.auth.getConnexion(user).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['dashboard']);
      },
      error => {
        console.log('error de connexion ' + error);
        this.errors = error.error;
        // console.log("this.errors.statusText");
        // console.log(this.errors.error.message);
      }
    );
  }

}
