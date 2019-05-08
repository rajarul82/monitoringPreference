import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  providers: [PreferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
