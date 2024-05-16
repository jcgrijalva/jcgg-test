import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() estado = "empty";
  @Input() error: boolean = false;
  public profileImage = "/assets/profile-img.png";
  public imgStyle = "";
  public message = '';
  public uploadIcon = "/assets/upload-icon.png";
  public deleteIcon = "";
  public actionMsg = "Adjunta una foto";
  public displayConf = '';

  constructor() {
    let isLocalStorageAvailable = typeof localStorage !== 'undefined';
    if (isLocalStorageAvailable){
      // @ts-ignore
      this.displayConf = localStorage.getItem('displayConf');
    }
  }

  onFileChoose(event: any) {
    let selectedFile = event.target.files[0]

    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "*Se soportan únicamente imágenes.";
      return;
    }

    this.imgStyle = "border-radius: 50%; background-color: #ffffff; padding: 10px;"
    const reader = new FileReader();

    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      console.log( reader.result);
      // @ts-ignore
      this.profileImage = reader.result.toString();
      this.actionMsg = selectedFile.name;
      this.deleteIcon = "/assets/delete-profile-img.png";
      this.uploadIcon = "";
    }
    this.message = '';
  }

  deleteImg(){
    this.profileImage = "/assets/profile-img.png";
    this.deleteIcon = "";
    this.uploadIcon = "/assets/upload-icon.png";
    this.actionMsg = "Adjunta una foto";
  }
}
