import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScnInfoComponent } from './scn-info/scn-info.component';
import { ScnListComponent } from './scn-list/scn-list.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { SettingsComponent } from './settings/settings.component';
import { ConfigPanelComponent } from './config-panel/config-panel.component';
import { TblEditorComponent } from './tbl-editor/tbl-editor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EntityComponent } from './entity/entity.component';

const routes: Routes = [
  { path: '', redirectTo: '/scn-list', pathMatch: 'full'},
  { path: 'scn-list', component: ScnListComponent },
  { path: 'scn-list/:scn', component: ScnInfoComponent },
  { path: 'org-chart', component: OrgChartComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'config-panel', component: ConfigPanelComponent },
  { path: 'table-editor', component: TblEditorComponent},
  { path: 'entity/:entity', component: EntityComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
