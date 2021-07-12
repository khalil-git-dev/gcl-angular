import { EleveService } from './../../services/eleve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-eleve',
  templateUrl: './list-eleve.component.html',
  styleUrls: ['./list-eleve.component.scss']
})
export class ListEleveComponent implements OnInit {
  datas: any;
  constructor(private eleveService: EleveService) { }

  ngOnInit() {

    // Liste des eleves 
    this.eleveService.getlistAllEleves().subscribe(
      data => {
        this.datas = data;
        // console.log(this.datas);
      }
    ); 
  }

}
