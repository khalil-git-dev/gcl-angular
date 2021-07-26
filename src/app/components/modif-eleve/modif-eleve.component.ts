import { ClasseService } from './../../services/classe.service';
import { FormGroup, FormControl } from '@angular/forms';
import { EleveService } from './../../services/eleve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SerieService } from 'src/app/services/serie.service';

@Component({
  selector: 'app-modif-eleve',
  templateUrl: './modif-eleve.component.html',
  styleUrls: ['./modif-eleve.component.scss']
})
export class ModifEleveComponent implements OnInit {
  currentEleve: any;
  classes: any;
  series: any;
  formUpdateEleve: FormGroup;

  constructor(private classeService: ClasseService, private eleveService: EleveService,
    private serieServices: SerieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getCurrentEleve(this.route.snapshot.paramMap.get('id'));

    // Liste des eleves 
    this.classeService.getListeClasses().subscribe(
      data => { 
        this.classes = data;
        // console.log(this.classes);
      }
    ); 
    // Liste des eleves 
    this.serieServices.getAllSeries().subscribe(
      data => { 
        this.series = data['hydra:member'];
        // console.log(this.series);
      }
    ); 
    
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

  // Update eleve
  upDateEleve(){
    const donnees = {
      matricule: this.formUpdateEleve.value.matricule,
      prenom: this.formUpdateEleve.value.prenom,
      nom: this.formUpdateEleve.value.nom,
      telephone: this.formUpdateEleve.value.telEleve,
      dateNaiss: this.formUpdateEleve.value.dateNaissance,
      lieuNaiss: this.formUpdateEleve.value.lieuNaissance,
      nationalite: this.formUpdateEleve.value.nationalite,
      sexe: this.formUpdateEleve.value.sexe,
      classe: this.formUpdateEleve.value.classe,
      serie: this.formUpdateEleve.value.serie,
      nomPere: this.formUpdateEleve.value.nomPere,
      nomMere: this.formUpdateEleve.value.nomMere,
      nomTuteur: this.formUpdateEleve.value.nomTuteur,
      telPere: this.formUpdateEleve.value.telPere,
      telMere: this.formUpdateEleve.value.telMere,
      telTuteur: this.formUpdateEleve.value.telTuteur,
      adresse: this.formUpdateEleve.value.adresse,
      religion: this.formUpdateEleve.value.religion,
      detailEl: this.formUpdateEleve.value.detailEl,
      etat: this.formUpdateEleve.value.etat,
    };

    this.eleveService.upDateEleve(this.currentEleve.id, donnees)
      .subscribe(
        data => {
          this.currentEleve = data;
          if(data['status'] == 201) {
            this.router.navigate(['list-eleve']);
            return;
          }
        },
        error => {
          console.log(error);
      });    
  

  }
  


}