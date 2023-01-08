import { Component, OnInit } from '@angular/core';
import {Observable,map} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {EntityService,Entity} from '../entity/entity.service';
@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit{

  id$ = this.router.paramMap.pipe(map((params)=>params.get('entity')));
  id:string = "";
  entity:Entity = new Entity("","");
  entityService:EntityService;
  constructor(private router:ActivatedRoute,entityService:EntityService){
    this.entityService=entityService;
  }

  ngOnInit():void{
    this.router.params.subscribe((params:any) => {this.id = params['entity']});
    for(let x of this.entityService.getEntityList()){

      if (x.name == this.id){
        this.entity = x;
        console.log(this.entity);
      }
    }
  }
}
