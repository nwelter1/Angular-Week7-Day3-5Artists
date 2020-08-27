import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Deadmau5Component } from './deadmau5/deadmau5.component';
import { PartyFavorComponent } from './party-favor/party-favor.component';
import { VkComponent } from './vk/vk.component';
import { SkrillexComponent } from './skrillex/skrillex.component';
import { TroyboiComponent } from './troyboi/troyboi.component';

const routes: Routes = [
  {
    path: 'deadmau5', component: Deadmau5Component
  },{
    path: 'party-favor', component: PartyFavorComponent
  },{
    path: 'vk', component: VkComponent
  },{
    path: 'skrillex', component: SkrillexComponent
  },{
    path: 'troyboi', component: TroyboiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
