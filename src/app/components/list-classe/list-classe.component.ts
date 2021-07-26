import { Router } from '@angular/router';
import { ClasseService } from './../../services/classe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-classe',
  templateUrl: './list-classe.component.html',
  styleUrls: ['./list-classe.component.scss']
})
export class ListClasseComponent implements OnInit {

  classes: any;
  classe: any;
  constructor(private classeService: ClasseService, private router: Router) { }

  ngOnInit() {
    // Liste des classe
    this.classeService.getListeClasses().subscribe(
      data => {
        this.classes = data;
        // console.log(data);
      }
    ); 
  }

  // Edit classe
  editClasse(classe): void {
    window.localStorage.removeItem("editClasseId");
    window.localStorage.setItem("editClasseId", classe.id.toString());
    this.router.navigate(['edit-classe']);
  };


  // Information d'une classe
  allInfosClasse(classe){
    window.localStorage.removeItem("detailClasseId");
    window.localStorage.setItem("detailClasseId", classe.id.toString());
    this.router.navigate(['detail-classe']);
    // this.classeService.getAllInfosByClasse(classe.id).subscribe(
    //   data => {
    //     this.classe = data;
    //     console.log(this.classe);
    //   }
    // );  
  }

}
