import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  {
    path:"",component:AcceuilComponent
  },
  {
    path:"vehicules",component:VehiculesComponent
  },
  {
    path:"Presentation",component:PresentationComponent
  },
  {
    path:"Mediatheque",component:MediathequeComponent
  },
  {
    path:"Contact",component:ContactSupportComponent
  },
  {
    path:"Recherche",component:RechercheComponent
  },
  {
    path:"Services",component:ServicesComponent
  },
  {
    path:"rdvservice",component:RdvserviceComponent
  },
  {
    path:"srvachat",component:SrvachatComponent
  },
  {
    path:"srventretien",component:SrventretienComponent
  },
  {
    path:"srvlocation",component:SrvlocationComponent
  },
  {
    path:"srvassurance",component:SrvassuranceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

