import { Injectable } from '@angular/core';

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
      {id: 100,scnName: 'High Tax Election', scnDate: "12-2-22", scnDescription: "This is pretty cool yo", version:1 },
      {id:102,scnName: 'Non High Tax Election', scnDate: "12-2-22", scnDescription: "Yessur pretty cool yo", version:1 }

  ];

    
  }
}

export class ScenarioLine{

  scnName:string;
  scnDate:string;
  scnDescription:string;
  version:number;
  id:number
  constructor(i:number,n:string,d:string,desc:string,v:number){
    this.id = i;
    this.scnName=n;
    this.scnDate=d;
    this.scnDescription=desc;
    this.version = v;
  }
}