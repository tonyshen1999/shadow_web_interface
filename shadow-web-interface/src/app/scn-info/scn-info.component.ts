import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable,map} from 'rxjs';
import {EntityService,Entity} from '../entity/entity.service';
@Component({
  selector: 'app-scn-info',
  templateUrl: './scn-info.component.html',
  styleUrls: ['./scn-info.component.css']
})
export class ScnInfoComponent {

  id:number = 0;
  id$ = this.router.paramMap.pipe(map((params)=>params.get('scn')));
  entityList:Entity[];
  scnName:string="High Tax Election";
  scnDate:string="12-2-22";
  scnDescription:string="This is pretty cool yo";
  version:number=1;
  
  constructor(private router:ActivatedRoute, e:EntityService){
    this.entityList=e.getEntityList();
    console.log(this.entityList)
  }

  ngOnInit(): void{
    this.router.params.subscribe((params:any) => {this.id = params['scn']});
  }

}
