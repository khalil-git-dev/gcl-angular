import { FormGroup, FormControl } from '@angular/forms';
import { ModifEleveComponent } from './../modif-eleve/modif-eleve.component';
import { EleveService } from './../../services/eleve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-eleve',
  templateUrl: './show-eleve.component.html',
  styleUrls: ['./show-eleve.component.scss']
})
export class ShowEleveComponent implements OnInit {

  currentEleve: any;
  classes: any;
  series: any;
  formUpdateEleve: FormGroup;

  constructor(private eleveService: EleveService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCurrentEleve(this.route.snapshot.paramMap.get('id'));

    this.formUpdateEleve = new FormGroup({
      matricule: new FormControl(''), 
      prenom: new FormControl(''), 
      nom: new FormControl(''), 
      telEleve: new FormControl(''),
      dateNaissance: new FormControl(''),
      semestre: new FormControl(''),
      lieuNaissance: new FormControl(''),
      nationalite: new FormControl(''),
      sexe: new FormControl(''),
      classe: new FormControl(''),
      serie: new FormControl(''),
      nomTuteur: new FormControl(''),
      nomPere: new FormControl(''),
      nomMere: new FormControl(''),
      telPere: new FormControl(''),
      telMere: new FormControl(''),
      telTuteur: new FormControl(''),
      adresse: new FormControl(''),
      religion: new FormControl(''),
      detailEl: new FormControl(''),
      etat: new FormControl(''),
      idClasse: new FormControl(''),
    });
  }
  // Get Eleve
  getCurrentEleve(id) {
    this.eleveService.getEleve(id)
      .subscribe(
        data => {
          this.currentEleve = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
