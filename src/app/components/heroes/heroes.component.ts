import { Component, Input, OnInit } from '@angular/core';
import {HeroService} from '../../services/hero.service'
import {Hero} from '../../Hero'
import { FilterService } from 'src/app/services/filter.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  searchName:string='';
  heroList!: any
   constructor(private heroService:HeroService, private filterService:FilterService) { }
 
   ngOnInit(): void {
     this.heroService.getHeroes().subscribe((heroes)=>this.heroes=heroes)
   }
   onFilterSubmit(filterObject:object){
    this.heroes= this.filterService.filter(this.heroes,filterObject)

   }
}
