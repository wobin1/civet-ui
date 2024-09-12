import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  alertData = [
    {"video_title": "Video One", "alert_detail": "Firearm detected"},
    {"video_title": "Video Two", "alert_detail": "Person down"},
    {"video_title": "Video Three", "alert_detail": "Suspicious package"},
    {"video_title": "Video Four", "alert_detail": "Unidentified object in the sky"},
    {"video_title": "Video Five", "alert_detail": "Vehicle accident"},
    {"video_title": "Video Six", "alert_detail": "Disturbance in progress"},
    {"video_title": "Video Seven", "alert_detail": "Security breach"},
    {"video_title": "Video Eight", "alert_detail": "Natural disaster"},
    {"video_title": "Video Nine", "alert_detail": "Unusual activity"},
    {"video_title": "Video Ten", "alert_detail": "Emergency situation"}
  ]


  viewAlert(){

  }

}
