import { ReportNoteComponent } from './components/report-note/report-note.component';
import { ShowEleveComponent } from './components/show-eleve/show-eleve.component';
import { ModifEleveComponent } from './components/modif-eleve/modif-eleve.component';
import { ListNoteComponent } from './components/list-note/list-note.component';
import { ListClasseComponent } from './components/list-classe/list-classe.component';
import { DetailClasseComponent } from './components/detail-classe/detail-classe.component';
import { ListEleveComponent } from './components/list-eleve/list-eleve.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';


const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list-eleve', component: ListEleveComponent },
  { path: 'edit-eleve/:id', component: ModifEleveComponent },
  { path: 'detail-classe', component: DetailClasseComponent },
  { path: 'list-classe', component: ListClasseComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'list-note', component: ListNoteComponent },
  { path: 'reportage-note', component: ReportNoteComponent },
  { path: 'show-eleve/:id', component: ShowEleveComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
