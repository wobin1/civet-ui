import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { AlertListComponent } from './alert-list/alert-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    VideoListComponent,
    SectionTitleComponent,
    AlertListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    VideoListComponent,
    SectionTitleComponent,
    AlertListComponent
  ]
})
export class SharedModule { 
  constructor(){
    console.log('SharedModule loaded');
  }
}
