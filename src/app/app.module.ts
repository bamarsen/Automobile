import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PresentationComponent } from './presentation/presentation.component';
import { MediathequeComponent } from './mediatheque/mediatheque.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ServicesComponent } from './services/services.component';
import { RdvserviceComponent } from './rdvservice/rdvservice.component';
import { SrvachatComponent } from './srvachat/srvachat.component';
import { SrventretienComponent } from './srventretien/srventretien.component';
import { SrvlocationComponent } from './srvlocation/srvlocation.component';
import { SrvassuranceComponent } from './srvassurance/srvassurance.component';
import { ContactSupportComponent } from './contact/contact-support.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculesComponent,
    AcceuilComponent,
    PresentationComponent,
    MediathequeComponent,
    ContactSupportComponent,
    RechercheComponent,
    ServicesComponent,    
    RdvserviceComponent, SrvachatComponent, SrventretienComponent, SrvlocationComponent, SrvassuranceComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
