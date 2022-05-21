import { Component, Input, OnInit } from '@angular/core';
import {HeroService} from '../../services/hero.service'
import {Hero} from '../../Hero'
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() heroes: Hero[] = [];
  @Input() searchName:string='';

  constructor() { }

  ngOnInit(): void {
    // this.heroService.getHeroes().subscribe((heroes)=>this.heroes=heroes)
  }

}
