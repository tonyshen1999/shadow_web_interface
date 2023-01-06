import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScnInfoComponent } from './scn-info/scn-info.component';
import { ScnListComponent } from './scn-list/scn-list.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { SettingsComponent } from './settings/settings.component';
import { ConfigPanelComponent } from './config-panel/config-panel.component';

const routes: Routes = [
  { path: '', redirectTo: 'scn-list', pathMatch: 'full'},
  { path: 'scn-list', component: ScnListComponent },
  { path: 'scn-info', component: ScnInfoComponent },
  { path: 'org-chart', component: OrgChartComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'config-panel', component: ConfigPanelComponent },
  { path: '**', component: ScnListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
