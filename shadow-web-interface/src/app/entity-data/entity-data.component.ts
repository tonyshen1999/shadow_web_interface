import { Component } from '@angular/core';
import {EntityDataService,Account,Adjustment} from '../entity-data/entity-data.service'
@Component({
  selector: 'app-entity-data',
  templateUrl: './entity-data.component.html',
  styleUrls: ['./entity-data.component.css']
})
export class EntityDataComponent {
  accounts:Account[]=[];
  adjustments:Adjustment[]=[];
  constructor(private entityDataService:EntityDataService){
    this.accounts = entityDataService.accounts;
    this.adjustments = entityDataService.adjustments;
  }

}

