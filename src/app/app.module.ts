import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule }      from  '@angular/platform-browser/animations';
import { ToastrModule }     from  'ng6-toastr-notifications';
import { UiSwitchModule }   from 'ngx-ui-switch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferenceService } from './shared/preference.service';
import { PreferenceComponent } from './preference/preference.component';


@NgModule({
  declarations: [
    AppComponent,
    PreferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UiSwitchModule.forRoot({
      size: 'small',
      checkedLabel: 'on',
      uncheckedLabel: 'off'
    }),
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [PreferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
