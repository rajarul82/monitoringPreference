import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { PlatformLocation } from '@angular/common';

import { Preference } from './preference.model';  

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  baseUrl: string;

  constructor(private http: HttpClient, platformLocation: PlatformLocation) { 
    this.baseUrl = (platformLocation as any).location;
  }
  //https://plat.ilienonline.com/CTLS.ManageMonitoring.Data/api/MonitoringPreferenceService/GetPreferenceRecord
  
  getPreferences(): Observable<Preference[]> {  
    //return this.http.get<Preference[]>("http://jsonplaceholder.typicode.com/posts");
    return this.http.get<Preference[]>("https://plat.ilienonline.com/CTLS.ManageMonitoring.Data/api/MonitoringPreferenceService/GetPreferenceRecord?customerId=218");
  }  
}
