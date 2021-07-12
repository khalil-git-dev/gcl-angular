import { DetailClasseComponent } from './components/detail-classe/detail-classe.component';
import { ListEleveComponent } from './components/list-eleve/list-eleve.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: ConnexionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list-eleve', component: ListEleveComponent },
  { path: 'detail-classe', component: DetailClasseComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
