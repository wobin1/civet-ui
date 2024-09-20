import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { VideoListComponent } from './video-list/video-list.component';
import { SectionTitleComponent } from './section-title/section-title.component';
import { AlertListComponent } from './alert-list/alert-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { SearchUploadHeaderComponent } from './search-upload-header/search-upload-header.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { ButtonComponent } from './button/button.component';
import { TagComponent } from './tag/tag.component';



@NgModule({
  declarations: [
    HeaderComponent,
    VideoListComponent,
    SectionTitleComponent,
    AlertListComponent,
    VideoPlayerComponent,
    VideoCardComponent,
    SearchUploadHeaderComponent,
    ImageCardComponent,
    ButtonComponent,
    TagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    VideoListComponent,
    SectionTitleComponent,
    AlertListComponent,
    VideoPlayerComponent,
    VideoCardComponent,
    SearchUploadHeaderComponent,
    ImageCardComponent,
    TagComponent
  ]
})
export class SharedModule { 
  constructor(){
    console.log('SharedModule loaded');
  }
}
