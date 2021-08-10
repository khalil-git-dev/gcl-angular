import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorService } from './helpers/jwt-interceptor.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormConnexionComponent } from './components/form-connexion/form-connexion.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListEleveComponent } from './components/list-eleve/list-eleve.component';
import { DetailClasseComponent } from './components/detail-classe/detail-classe.component';
import { ListClasseComponent } from './components/list-classe/list-classe.component';
import { EditClasseComponent } from './components/edit-classe/edit-classe.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { ListNoteComponent } from './components/list-note/list-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ProgressSpinnerOverviewComponent } from './components/progress-spinner-overview/progress-spinner-overview.component';
import {MatIconModule} from '@angular/material/icon';
import { ModifEleveComponent } from './components/modif-eleve/modif-eleve.component';
import { ShowEleveComponent } from './components/show-eleve/show-eleve.component';
import { ReportNoteComponent } from './components/report-note/report-note.component';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ModifUserComponent } from './components/modif-user/modif-user.component';
import { RegistreCoursComponent } from './components/registre-cours/registre-cours.component';
import { ListCoursComponent } from './components/list-cours/list-cours.component';
import { DetailCoursComponent } from './components/detail-cours/detail-cours.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormConnexionComponent,
    ConnexionComponent,
    SidebarComponent,
    NavbarComponent,
    ListEleveComponent,
    DetailClasseComponent,
    ListClasseComponent,
    EditClasseComponent,
    ListUserComponent,
    ListNoteComponent,
    ModifEleveComponent,
    ShowEleveComponent,
    ReportNoteComponent,
    ShowUserComponent,
    AddUserComponent,
    ModifUserComponent,
    RegistreCoursComponent,
    ListCoursComponent,
    DetailCoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule
    // ProgressSpinnerOverviewComponent
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
