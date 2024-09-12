import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { AppLayoutComponent } from './app-layout.component';
import { LiveVideoMonitoringComponent } from './live-video-monitoring/live-video-monitoring.component';
import { ManageVideosComponent } from './manage-videos/manage-videos.component';
import { ManageDatabaseComponent } from './manage-database/manage-database.component';
import { AnalyseVideoComponent } from './analyse-video/analyse-video.component';


@NgModule({
  declarations: [
    HomeComponent,
    AppLayoutComponent,
    LiveVideoMonitoringComponent,
    ManageVideosComponent,
    ManageDatabaseComponent,
    AnalyseVideoComponent
  ],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    SharedModule
  ]
})
export class AppLayoutModule { }
