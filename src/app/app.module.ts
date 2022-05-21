import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router'
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FiltersComponent } from './components/filters/filters.component';
import { TableComponent } from './components/table/table.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { FilterPipe } from './filter.pipe';

const appRoutes:Routes=[
  {path:'', component:HeroesComponent},
  {path:'heroes', component:HeroesComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    TableComponent,
    HeroesComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
