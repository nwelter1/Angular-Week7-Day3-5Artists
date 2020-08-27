import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Deadmau5Component } from './deadmau5/deadmau5.component';
import { SkrillexComponent } from './skrillex/skrillex.component';
import { PartyFavorComponent } from './party-favor/party-favor.component';
import { TroyboiComponent } from './troyboi/troyboi.component';
import { VkComponent } from './vk/vk.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    Deadmau5Component,
    SkrillexComponent,
    PartyFavorComponent,
    TroyboiComponent,
    VkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
