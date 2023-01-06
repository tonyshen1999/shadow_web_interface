import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { ScnListComponent } from './scn-list/scn-list.component';
import { ScnInfoComponent } from './scn-info/scn-info.component';
import { TblEditorComponent } from './tbl-editor/tbl-editor.component';
import { ConfigPanelComponent } from './config-panel/config-panel.component';
import { SettingsComponent } from './settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EntityComponent } from './entity/entity.component';
import { EntityDataComponent } from './entity-data/entity-data.component';
import { EntityAccountsComponent } from './entity-accounts/entity-accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartComponent,
    ScnListComponent,
    ScnInfoComponent,
    TblEditorComponent,
    ConfigPanelComponent,
    SettingsComponent,
    HeaderComponent,
    NotFoundComponent,
    EntityComponent,
    EntityDataComponent,
    EntityAccountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
