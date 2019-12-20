import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material';
import { routing } from './app.routing';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@shared/shared/shared.module';
import { NormalHeaderRouteComponent } from '../components/normal-header-route/normal-header-route.component';
import { NoHeaderRouteComponent } from '../components/no-header-route/no-header-route.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NormalHeaderRouteComponent,
    NoHeaderRouteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-georgecolgrove' }),
    CommonModule,
    routing,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
