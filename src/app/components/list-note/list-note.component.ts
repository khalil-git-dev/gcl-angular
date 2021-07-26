import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ClasseService } from './../../services/classe.service';
import { DisciplineService } from './../../services/discipline.service';
import { NoteService } from './../../services/note.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss'],
})
export class ListNoteComponent implements OnInit {
  datas: any;
  disciplines: any;
  classes: any;
  loading: any;
  errors: any;
  formVisualiserNote: FormGroup;

  constructor(private authService: AuthService, private classeService: ClasseService, private disciplineService: DisciplineService, private noteService: NoteService) { }

  ngOnInit() {
    this.loading = true;
    const test = [];
    const helper = new JwtHelperService();
    this.formVisualiserNote = new FormGroup({
      idClasse: new FormControl(''), 
      idDiscipline: new FormControl(''), 
      semestre: new FormControl(''),
    });
    
    const decodedToken = helper.decodeToken(this.authService.currentUserValue.token);
    // Other functions
    // const expirationDate = helper.getTokenExpirationDate(this.authService.currentUserValue.token);
    // const isExpired = helper.isTokenExpired(this.authService.currentUserValue.token);
    
    // Liste des notes eleves
    //Si c'est un formateur qui est connecter
    if(decodedToken.roles[0] == "ROLE_FORMATEUR"){
      this.disciplineService.getDisciplinesFormateur(decodedToken.id).subscribe(
        data => {
          this.disciplines = data;
          test[0] = data[0].id
          console.log(this.disciplines);
          this.loading = false;
        }
      );
    }else{
      this.disciplineService.getAllDiscipline().subscribe(
        data => {
          this.disciplines = data;
          test[0] = data[0].id
          console.log(this.disciplines);
          this.loading = false;
        }
      );

    }
    //  Si c'est un formateur qui est connecter
    if(decodedToken.roles[0] == "ROLE_FORMATEUR"){
      this.classeService.listClassesByFormateur(decodedToken.id).subscribe(
        data => {
          this.classes = data;
          test[1] = data[0].id
          console.log(this.classes);
          this.loading = false;
        }
      );
    }else{
      //listClassesByFormateur()
      this.classeService.getListeClasses().subscribe(
        data => {
          this.classes = data;
          test[1] = data[0].id
          console.log(this.classes);
          this.loading = false;
        }
      );
    }
    // Liste des notes eleves
    // console.log("donnees ===");
    // console.log(test);
        
    const donnee = {
      idDiscipline: 3,//test[0],
      idClasse: 1, //test[1] ,
      semestre: 1
    };
    console.log(donnee);
    this.noteService.visualiserNotesSemestrielEleve(donnee).subscribe(
      data => {
        this.datas = data;
        // console.log("this.datas");
        console.log(this.datas);
      }
    );
    
  }

  visualiserNote(){
    const donnees = {
      idClasse: this.formVisualiserNote.value.idClasse,
      idDiscipline: this.formVisualiserNote.value.idDiscipline,
      semestre: this.formVisualiserNote.value.semestre
    };
    console.log(donnees);
    // Liste des notes eleves
    this.noteService.visualiserNotesSemestrielEleve(donnees).subscribe(
      data => {
        this.datas = data;
        console.log("this.datas +++");
        console.log(this.datas);
      }
    );

  }

    
     
}
  
