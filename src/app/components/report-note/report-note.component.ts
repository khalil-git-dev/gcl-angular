import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteService } from './../../services/note.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-note',
  templateUrl: './report-note.component.html',
  styleUrls: ['./report-note.component.scss']
})
export class ReportNoteComponent implements OnInit {
  evaluations: any;
  elevesEvals: any;
  formEvaluation: FormGroup;
  formNoteEleve: FormGroup;
  donnees: any;
  noteEls: any;
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    // allEvaluation
    this.noteService.allEvaluation().subscribe(
      data => {
        this.evaluations = data;
        // console.log(this.evaluations);
      }
    );
    //
    this.formEvaluation = new FormGroup({
      idEvaluation: new FormControl(''), 
    });
    
    // this.formNoteEleve = new FormGroup({
    //   noteEleve0: new FormControl(''), 
    //   noteEleve1: new FormControl(''), 
    //   noteEleve2: new FormControl(''), 
    //   noteEleve3: new FormControl(''),
    //   noteEleve4: new FormControl(''), 
    //   noteEleve5: new FormControl(''), 
    //   noteEleve6: new FormControl(''), 
    // });


  }

  toFormGroup(noteEleves: any ) {
    const group: any = {};

    // noteEleves.forEach(note => {
      for (let i = 0; i < noteEleves.length; i++) {
        group["noteEl"+i] = new FormControl('', Validators.required);
        console.log("note.key ===>");
        console.log(group);
      }
    // });
    return new FormGroup(group);
  }

  // Liste des evaluations
  elevesEvatuation(id){
    // console.log("elevesEvatuation ==> "+ id);
    this.noteService.elevesEvaluation(id).subscribe(
      data => {
        this.elevesEvals = data;

        this.noteEls = this.toFormGroup(this.elevesEvals);
        console.log("this.toFormGroup(this.noteEls)");
        console.log(this.toFormGroup(this.noteEls));
        console.log(this.toFormGroup(this.elevesEvals));
      }
    );
  }
  
  //
  retorterNotes(){
    // const donnees = {
    //   noteEleve0: this.formNoteEleve.value.noteEleve0,
    //   noteEleve1: this.formNoteEleve.value.noteEleve1,
    //   noteEleve2: this.formNoteEleve.value.noteEleve2,
    //   noteEleve3: this.formNoteEleve.value.noteEleve3,
    //   noteEleve4: this.formNoteEleve.value.noteEleve4,
    // }
    console.log("test");
    this.donnees = console.log(this.formNoteEleve);
    this.donnees = JSON.stringify(this.formNoteEleve);
    // this.donnees = JSON.stringify(this.formNoteEleve.getRawValue());
    console.log("this.donnees ==>")
    console.log(this.donnees)

  }

}
