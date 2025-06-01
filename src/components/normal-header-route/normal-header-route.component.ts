import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';
import { FooterComponent } from "../../shared/footer/footer.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-normal-header-route',
    templateUrl: './normal-header-route.component.html',
    styleUrls: ['./normal-header-route.component.scss'],
    imports: [
        RouterOutlet,
        SharedModule,
        FooterComponent,
        HeaderComponent
    ]
})
export class NormalHeaderRouteComponent {

}
