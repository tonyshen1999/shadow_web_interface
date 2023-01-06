import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){}
  ngOnInit(): void {
  }

  goToScnList() {
    this.router.navigate(['scn-list']);
  }
  goToOrgChart(){
    this.router.navigate(['org-chart']);
  }

}


