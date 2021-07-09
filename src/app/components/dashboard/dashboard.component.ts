import { FormateurService } from './../../services/formateur.service';
import { ClasseService } from './../../services/classe.service';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cours: any;
  classes: any;
  pourcentages: any;
  formateurs: any;
  constructor(private formateurService: FormateurService, private classService: ClasseService, private coursService: CoursService) { }

  ngOnInit() {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
      const headers = new HttpHeaders({
        'Content-type': 'application/json; ' + 'charset=utf-8',
        'Authorization': 'Bearer ' + currentUser.token,
        });

      // Recuperation de la progression des cours 
      this.coursService.getProgressCours(headers).subscribe(
        data => {
          this.cours = data;
          
          let pourcentage = [];
          // this.pourcentage = (this.cours.totalHoraire/this.cours.quantumHoraire) * 100;
          for (const [key, value] of Object.entries(data)) {
            pourcentage[key] = ((value.totalHoraire / value.quantumHoraire) * 100).toFixed(2) ;
          }
          this.pourcentages = pourcentage;
          
          // console.log(pourcentage);
          console.log(data);
        }
      );

      // Liste des classes 
      this.classService.getListeClasses(headers).subscribe(
        data => {
          this.classes = data;
          console.log(this.classes);
        }
      );    

      // Liste des formateurs 
      this.formateurService.getListeFormateurs(headers).subscribe(
        data => {
          this.formateurs = data;
          console.log(data);
        },
        error =>{
          console.log(error)
        }
      );
  }



}
