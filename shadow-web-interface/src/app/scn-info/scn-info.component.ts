import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable,map} from 'rxjs';

@Component({
  selector: 'app-scn-info',
  templateUrl: './scn-info.component.html',
  styleUrls: ['./scn-info.component.css']
})
export class ScnInfoComponent {

  id:number = 0;
  id$ = this.router.paramMap.pipe(map((params)=>params.get('scn')));

  constructor(private router:ActivatedRoute){

  }

  ngOnInit(): void{
    this.router.params.subscribe((params:any) => {this.id = params['scn']});
  }

}
