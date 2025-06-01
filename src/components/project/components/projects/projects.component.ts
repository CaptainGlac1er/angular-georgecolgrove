import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjectsService } from '../../../../service/projects.service';
import { Project } from '../../../../interfaces/project';
import { Title } from '@angular/platform-browser';
import { IS_BROWSER } from '../../../../shared/providers';
import { EMPTY, Observable, shareReplay } from 'rxjs';
import { AsyncPipe, DatePipe, NgForOf, NgIf } from "@angular/common";
import { OrderDatePipe } from "../../../../shared/pipes/order-date.pipe";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss', '../../../../shared/css/page-listing.scss'],

    imports: [
        DatePipe,
        RouterLink,
        NgIf,
        NgForOf,
        OrderDatePipe,
        AsyncPipe
    ]
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService,
    private titleService: Title,
    @Inject(IS_BROWSER) private isBrowser: boolean
    ) {
    if(isBrowser) {
      this.projects$ = this.projectService.getProjectsData().pipe(shareReplay(1))
    } else {
      this.projects$ = EMPTY;
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle('George Walter Colgrove IV - Projects');
  }

}
