import { Component, OnInit } from '@angular/core';
import { PreferenceService } from '../shared/preference.service';
import { Observable } from 'rxjs';
import { Preference } from '../shared/preference.model';
import  data  from '../shared/data.json';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})

export class PreferenceComponent implements OnInit {

  preferences : Preference[];  
  json:any = data;
  prefModel:any; 
  isDisableMonitoringPref : boolean;
  constructor(private preferenceService: PreferenceService) { }

  ngOnInit() {
    //this.preferenceService.getPreferences()  
    //    .subscribe((data: Preference[]) => {  
    //      this.preferences = data;
    //      console.log(this.json);
    //});
    this.isDisableMonitoringPref = false;
    let preferenceUiModel = {}; 
    this.json.forEach(element => {
      preferenceUiModel[element.prefName]= element.prefValue ;
    });

    this.prefModel = preferenceUiModel;
    console.log("Object " +this.prefModel);
    console.log("Json" + JSON.stringify(this.prefModel));
  }
}
