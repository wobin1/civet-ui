import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout.component';
import { HomeComponent } from './home/home.component';
import { LiveVideoMonitoringComponent } from './live-video-monitoring/live-video-monitoring.component';
import { ManageVideosComponent } from './manage-videos/manage-videos.component';
import { AnalyseVideoComponent } from './analyse-video/analyse-video.component';
import { ManageDatabaseComponent } from './manage-database/manage-database.component';

const routes: Routes = [
  {
    path: 'app',
    component: AppLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'live-video-monitoring', component: LiveVideoMonitoringComponent},
      {path: 'manage-videos', component: ManageVideosComponent},
      {path: 'manage-database', component: ManageDatabaseComponent},
      {path: 'analyse-video', component: AnalyseVideoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
