import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntityDataService {
  accounts:Account [] =[];
  adjustments:Adjustment [] = [];
  constructor() { 
    this.accounts = [

      new Account("Sales",-71607,"USD","CYE2022","TBFC","",""),
      new Account("COGS",40594,"USD","CYE2022","TBFC","",""),
      new Account("OtherIncomeThirdParty",-218811,"USD","CYE2022","TBFC","",""),
      new Account("OtherIncomeIntercompany",-41877,"USD","CYE2022","TBFC","",""),
      new Account("InterestIncomeThirdParty",-57919,"USD","CYE2022","TBFC","",""),
      new Account("InterestIncomeIntercompany",-11085,"USD","CYE2022","TBFC","",""),
      new Account("Sales",-71607,"USD","CYE2022","TBFC","",""),
      new Account("COGS",40594,"USD","CYE2022","TBFC","",""),
      new Account("OtherIncomeThirdParty",-218811,"USD","CYE2022","TBFC","",""),
      new Account("OtherIncomeIntercompany",-41877,"USD","CYE2022","TBFC","",""),
      new Account("InterestIncomeThirdParty",-57919,"USD","CYE2022","TBFC","",""),
      new Account("InterestIncomeIntercompany",-11085,"USD","CYE2022","TBFC","",""),
      new Account("Sales",-71607,"USD","CYE2022","TBFC","",""),
      new Account("COGS",40594,"USD","CYE2022","TBFC","",""),
      new Account("OtherIncomeThirdParty",-218811,"USD","CYE2022","TBFC","",""),
      new Account("OtherIncomeIntercompany",-41877,"USD","CYE2022","TBFC","",""),
      new Account("InterestIncomeThirdParty",-57919,"USD","CYE2022","TBFC","",""),
      new Account("InterestIncomeIntercompany",-11085,"USD","CYE2022","TBFC","",""),
      new Account("Sales",-71607,"USD","CYE2022","TBFC","",""),
      new Account("COGS",40594,"USD","CYE2022","TBFC","",""),
      new Account("OtherIncomeThirdParty",-218811,"USD","CYE2022","TBFC","",""),
      new Account("OtherIncomeIntercompany",-41877,"USD","CYE2022","TBFC","",""),
      new Account("InterestIncomeThirdParty",-57919,"USD","CYE2022","TBFC","",""),
      new Account("InterestIncomeIntercompany",-11085,"USD","CYE2022","TBFC","",""),
    ];
    this.adjustments = [

      new Adjustment("OtherDeductions",413.8,"USD","CYE2022","","ForeignSchM-1Adj","ForeignSchM-1Adj",0)

    ];
  }
}


export class Account{

  accName:string = "";
  amount:number = 0;
  currency:string = "";
  period:string = "";
  collection:string="";
  class:string="";
  dataType:string="";



  constructor(n:string,a:number,c:string,p:string,col:string,cla:string,d:string) {
    this.accName=n;
    this.amount=a;
    this.currency=c;
    this.period=p;
    this.collection=col;
    this.class=cla;
    this.dataType=d;
   }


}

export class Adjustment{
  accName:string;
  adjType:string;
  adjCol:string;
  adjClass:string;
  adjAmount:number;
  currency:string;
  period:string;
  adjPercentage:number;


  constructor(n:string,a:number,c:string,p:string,col:string,cla:string,t:string,perc:number) {
    this.accName=n;
    this.adjAmount=a;
    this.currency=c;
    this.period=p;
    this.adjCol=col;
    this.adjClass=cla;
    this.adjType=t;
    this.adjPercentage=perc;
   }

}