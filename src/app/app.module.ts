import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/** Routes */
import {APP_ROUTING} from './app.routes';

/** Services */


/** Gallery things */
import 'hammerjs';
import 'mousetrap';
import {ModalGalleryModule} from 'angular-modal-gallery';


/** Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AddressComponent } from './components/address/address.component';
import { CaroComponent } from './components/caro/caro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
    AddressComponent,
    CaroComponent
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
