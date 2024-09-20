import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { HomeComponent } from './home/home.component';
import { LiveVideoMonitoringComponent } from './live-video-monitoring/live-video-monitoring.component';
import { ManageVideosComponent } from './manage-videos/manage-videos.component';
import { AnalyseVideoComponent } from './analyse-video/analyse-video.component';
import { ManageDatabaseComponent } from './manage-database/manage-database.component';
import { VideoReportComponent } from './video-report/video-report.component';
import { AnalyseComponent } from './analyse/analyse.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'live-video-monitoring', component: LiveVideoMonitoringComponent},
      {path: 'manage-videos', component: ManageVideosComponent},
      {path: 'video-report', component: VideoReportComponent},
      {path: 'manage-database', component: ManageDatabaseComponent},
      {path: 'analyse-video', component: AnalyseVideoComponent},
      {path: 'analyse', component: AnalyseComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
