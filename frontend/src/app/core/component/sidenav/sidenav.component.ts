import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";

import { MatIconRegistry } from "@angular/material/icon";
import { SVG_ICONS } from './../svg-icons';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {

    // this.logger.info('SidenavComponent: constructor()');

    const svgIconPath = '../assets/images/icons/sidenav/';

    SVG_ICONS.forEach(svgIcon => {

      if (svgIcon.name != undefined && svgIcon.filename != undefined) {

        this.matIconRegistry.addSvgIcon(
          svgIcon.name,
          this.domSanitizer.bypassSecurityTrustResourceUrl(svgIconPath + svgIcon.filename)
        );

      }
    });

  }
  ngOnInit(): void {
  }


}
