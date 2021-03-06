
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AcercadeComponent} from './components/acercade/acercade.component';
import {PsicooncologiaComponent} from './components/psicooncologia/psicooncologia.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'acerca', component: AcercadeComponent },
  { path: 'psicooncologia', component: PsicooncologiaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
