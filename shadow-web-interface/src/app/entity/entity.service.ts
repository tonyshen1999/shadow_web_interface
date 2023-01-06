import { Injectable, Inject, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EntityService {

  entityList:Entity[]=[];

  constructor() {

    let e2:Entity = new Entity("WorldCom","CFC");
    let e3:Entity = new Entity("Lehman Brothers","CFC");
    let e4:Entity = new Entity("Tyco","DRE");
    let e1:Entity = new Entity("Enron","USSH");
    e2.setParent(e1);
    e3.setParent(e1);
    e4.setParent(e1);
    this.entityList.push(e2);
    this.entityList.push(e3);
    this.entityList.push(e4);
    this.entityList.push(e1);

   }

   getEntityList():Entity[]{

    return this.entityList;
   }
}

export class Entity{
  
  name:string;
  type:string;
  parents:Entity[]=[];
  children:Entity[]=[];
  parentString:string = "";
  childrenString:string = "";

  constructor(n:string,t:string){
    this.name=n;
    this.type=t;


  }
  setParent(other:Entity){

    this.parents.push(other);
    other.children.push(this);
    this.pushParentString();
  }

  pushParentString(){
    for(let p of this.parents){
      this.parentString = this.parentString + p.name +" "
    }
  }
  setChild(other:Entity){
    this.children.push(other);
    other.parents.push(this);
    this.pushParentString();
  }
  pushChildrenString(){
    for(let c of this.children){
      this.childrenString = this.childrenString + c.name +" "
    }
  }
}
