import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './components/bar/bar.component';
import { DonnutComponent } from './components/donnut/donnut.component';
import { LineComponent } from './components/line/line.component';
import { RadarComponent } from './components/radar/radar.component';

const routes: Routes = [
  {path: 'bar', component: BarComponent},
  {path: 'donut', component: DonnutComponent},
  {path: 'line', component: LineComponent},
  {path: 'radar', component: RadarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'bar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
