import { EleveService } from './../../services/eleve.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-eleve',
  templateUrl: './list-eleve.component.html',
  styleUrls: ['./list-eleve.component.scss']
})
export class ListEleveComponent implements OnInit {
  datas: any;
  constructor(private eleveService: EleveService,  private router: Router) { }

  ngOnInit() {

    // Liste des eleves 
    this.eleveService.getlistAllEleves().subscribe(
      data => {
        this.datas = data;
        // console.log(this.datas);
      }
    ); 
  }

  // Editer un eleve
  editEleve(nom){
    this.router.navigate(['edit-eleve', {queryParams:{nom: nom}}]);
    return;
  }
  // change Status eleve
  changeStatus(id){ 
    this.eleveService.changeStatus(id)
      .subscribe(
        data => {
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
