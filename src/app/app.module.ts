import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import { routing } from './app.routing';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from '../pages/page-not-found/page-not-found.component';
import {NavigationBarComponent} from '../shared/navigation-bar/navigation-bar.component';
import {HeaderComponent} from '../shared/header/header.component';
import {FooterComponent} from '../shared/footer/footer.component';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'angular-georgecolgrove'}),
    CommonModule,
    routing,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
