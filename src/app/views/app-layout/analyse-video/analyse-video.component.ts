import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../../../services/http-service.service';

@Component({
  selector: 'app-analyse-video',
  templateUrl: './analyse-video.component.html',
  styleUrl: './analyse-video.component.scss'
})
export class AnalyseVideoComponent {

  files: File[] = [];
  selectedFile: File| null = null;
  videoForm!: FormGroup
  uploadProgress: number = 0;

  constructor(
    private fb: FormBuilder,
    private api: HttpServiceService
  ){}


  ngOnInit(){
    this.videoForm = this.fb.group({
      videoFile: ['']
    });
  }

  onFileSelected(event:any){
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log(this.selectedFile)
    }
  }



   // Submit form to upload file
   onSubmit() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.set('file', this.selectedFile);

    this.api.post('', this.files)

  }


}
