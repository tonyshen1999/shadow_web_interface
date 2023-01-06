import { Component } from '@angular/core';
import {ScnListService} from './scn-list.service';
import {ScenarioLine} from './scn-list.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-scn-list',
  templateUrl: './scn-list.component.html',
  styleUrls: ['./scn-list.component.css']
})
export class ScnListComponent {

  title = this.scnService.title;
  scenarios = this.scnService.scenarios;
  headers = this.scnService.headers;

  constructor(private scnService:ScnListService){}
}
