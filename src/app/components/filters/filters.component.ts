import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormField } from 'src/app/DynamicFormField';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  filterForm!:FormGroup;
  dynamicFormFields!:DynamicFormField[];
  @Output() onClick =new EventEmitter()
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.filterForm= this.fb.group({})
    this.dynamicFormFields=[
      {
        title: 'Email',
        type: 'text'
      },
      {
        title: 'Phone',
        type: 'text'
      },
      {
        title: 'Name',
        type: 'text'
      },
      {
        title: 'Company',
        type: 'text'
      },
     {
        title: 'country',
        type: 'dropdown',
        api: 'http://countryapi.gear.host/v1/Country/getCountries?pLimit=25&pPage=1',
        multiple: false,
      }, 
      {
        title: 'Date',
        type: 'date'
      }
  ]
    this.dynamicFormFields.forEach((formItem)=>{
      this.filterForm.addControl(formItem.title, this.fb.control(null))
    })
  }
  onSubmit(){
    this.onClick.emit(this.filterForm.value)
  }

}
