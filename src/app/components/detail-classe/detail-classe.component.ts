import { ClasseService } from './../../services/classe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-classe',
  templateUrl: './detail-classe.component.html',
  styleUrls: ['./detail-classe.component.scss']
})
export class DetailClasseComponent implements OnInit {
  datas: any;
  constructor(private classeService: ClasseService) { }

  ngOnInit() {
    //
    
    let idClasse =1;
    this.classeService.getAllInfosByClasse(idClasse).subscribe(
      data => {
        this.datas = data;
        // console.log(this.datas);
      }
    ); 
  }

}
