import { Router } from '@angular/router';
import { ClasseService } from './../../services/classe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-classe',
  templateUrl: './detail-classe.component.html',
  styleUrls: ['./detail-classe.component.scss']
})
export class DetailClasseComponent implements OnInit {
  datas: any;
  constructor(private classeService: ClasseService, private router: Router) { }

  ngOnInit() {
    //
    
    let idClasse = window.localStorage.getItem("detailClasseId");
    if(!idClasse) {
      alert("Invalide action.")
      this.router.navigate(['list-classe']);
      return;
    }
    this.classeService.getAllInfosByClasse(idClasse).subscribe(
      data => {
        this.datas = data;
      }
    ); 
  }

}
