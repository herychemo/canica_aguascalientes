import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Routes */
import {APP_ROUTING} from './app.routes';

/** Services */


/** Components */
import { AppComponent } from './app.component';


/** Gallery things */
import 'hammerjs';
import 'mousetrap';
import {ModalGalleryModule} from 'angular-modal-gallery';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ModalGalleryModule.forRoot(), // for gallery
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
