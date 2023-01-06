import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ScnListService {

  title:string;
  scenarios:ScenarioLine[]=[];
  headers:string [] = ["Scenario Name","Scenario Date","Scenario Version","Scenario Description","Export"]
  constructor() { 
    this.title = "Scenario List";
    this.scenarios=[ 
      {scnName: 'High Tax Election', scnDate: "12-2-22", scnDescription: "This is pretty cool yo", version:1 },
      {scnName: 'Non High Tax Election', scnDate: "12-2-22", scnDescription: "Yessur pretty cool yo", version:1 }

  ];

    
  }
}

export class ScenarioLine{

  scnName:string;
  scnDate:string;
  scnDescription:string;
  version:number;
  constructor(n:string,d:string,desc:string,v:number){
    this.scnName=n;
    this.scnDate=d;
    this.scnDescription=desc;
    this.version = v;
  }
}