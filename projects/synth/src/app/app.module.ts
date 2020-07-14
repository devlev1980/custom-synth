import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SynthComponent } from './synth/synth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule, MatSliderModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {ChartsModule} from 'ng2-charts';
import {KnobModule} from 'ng2-knob';

@NgModule({
  declarations: [
    AppComponent,
    SynthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSliderModule,
    FormsModule,
    ChartsModule,
    KnobModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
