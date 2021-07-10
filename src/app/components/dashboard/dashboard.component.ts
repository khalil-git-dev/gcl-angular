import { EvenmentService } from './../../services/evenment.service';
import { FormateurService } from './../../services/formateur.service';
import { ClasseService } from './../../services/classe.service';
import { Component, OnInit } from '@angular/core';
import { CoursService } from 'src/app/services/cours.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cours: any; classes: any; pourcentages: any;
  formateurs: any; evenements: any; 
  jourHeure: any; dateJour: any;

  constructor(private formateurService: FormateurService,private classService: ClasseService,
    private coursService: CoursService, private eventService: EvenmentService) { }

  ngOnInit() {
      moment.locale('fr');
      console.log(moment.locale());
      this.jourHeure = moment(new Date()).format("dddd, H:mm:ss");
      this.dateJour = moment(new Date()).format("Do MMMM YYYY");

      // Recuperation de la progression des cours 
      this.coursService.getProgressCours().subscribe(
        data => {
          this.cours = data;
          
          let pourcentage = [];
          for (const [key, value] of Object.entries(data)) {
            pourcentage[key] = ((value.totalHoraire / value.quantumHoraire) * 100).toFixed(2) ;
          }
          this.pourcentages = pourcentage;
          
          console.log(data);
        }
      );

      // Liste des classes 
      this.classService.getListeClasses().subscribe(
        data => {
          this.classes = data;
          console.log(this.classes);
        }
      );    

      // Liste des formateurs 
      this.formateurService.getListeFormateurs().subscribe(
        data => {
          this.formateurs = data;
          console.log(data);
        },
        error =>{
          console.log(error)
        }
      );

      // Les evenements a venir
      this.eventService.getEvenementFuture().subscribe(
        data => {
          this.evenements = data;
          console.log(data);
        },
        error =>{
          console.log(error)
        }
      );

  }



}
