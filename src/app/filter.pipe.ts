import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './Hero';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(heroes: Hero[], searchName: string) {
   if (heroes.length===0|| searchName===''){
     return heroes
   }else{
      return heroes.filter((hero)=>{
       return hero.name.toLowerCase().includes(searchName.toLowerCase())
      })
   }
  }

}
