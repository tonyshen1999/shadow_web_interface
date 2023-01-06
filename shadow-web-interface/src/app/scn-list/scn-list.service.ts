import { Injectable } from '@angular/core';
import { EntityComponent } from '../entity/entity.component';
import { EntityService } from '../entity/entity.service';

@Injectable({
  providedIn: 'root'
})

export class ScnListService {

  title:string;
  scenarios:ScenarioLine[]=[];
  headers:string [] = ["Scenario ID","Scenario Name","Scenario Date","Scenario Version","Scenario Description",""]
  constructor() { 
    this.title = "Scenario List";
    this.scenarios=[ 
      new ScenarioLine(100,'High Tax Election', "12-2-22","This is pretty cool yo",1),
      new ScenarioLine(102,'Non High Tax Election', "12-2-22","This is pretty cool yo",1),

  ];

    
  }
}

export class ScenarioLine{

  scnName:string;
  scnDate:string;
  scnDescription:string;
  version:number;
  id:number
  
  constructor(i:number,n:string,d:string,desc:string,v:number, e:EntityService[]=[]){
    this.id = i;
    this.scnName=n;
    this.scnDate=d;
    this.scnDescription=desc;
    this.version = v;
    
  }


}