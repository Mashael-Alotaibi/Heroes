import { Injectable } from '@angular/core';
import { Hero } from '../Hero';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  filter(heroesList:Hero[], filterObject:any){
    const{Name, Email, Country, Company}=filterObject
    if (heroesList.length===0){
      // console.log(heroesList,filterObject);
    return heroesList
    }else{
      return heroesList.filter((hero)=>{
        return hero.name.toLowerCase().includes(Name.toLowerCase())
      })
    }

  }

}
