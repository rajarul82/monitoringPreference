import { Component, OnInit } from '@angular/core';
import { PreferenceService } from '../shared/preference.service';
import { Observable } from 'rxjs';
import { ToastrManager } from 'ng6-toastr-notifications';

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
  constructor(private preferenceService: PreferenceService, public toastr: ToastrManager) { }

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
  
  showSuccess() {
    this.toastr.successToastr('Updated Successfully.', 'Success!');
  }

  showCustom() {
    this.toastr.customToastr(
      '<span style=color: green; font-size: 16px; text-align: center;}>Custom Toast</span>',
      null,
      { enableHTML: true }
    );
  }

  showToast(position: any = 'top-left', showClose: boolean = true) {
    this.toastr.infoToastr('This is a toast.', 'Toast', {
      position: position,
      showCloseButton: showClose,
    });
  }
}
