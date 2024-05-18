import {Component, Input} from '@angular/core';
import {AppService} from "../../app.service";
import {NgIf} from "@angular/common";
import {User} from "../../model/user";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf
  ],
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
  public infoTitle: string | undefined = "Imágen perfil";
  public displayConf = true;
  tmpImg = '';
  modo : string = '';
  user: User | undefined ;
  edad: string = "Menor";

  constructor(private appService: AppService) {

    this.appService.getModoProfile.subscribe(mod => this.modo = mod);
    this.appService.getImgProfile.subscribe(img => this.tmpImg = img);
    this.appService.getUserInfo.subscribe(usr => this.user = usr);
    this.appService.getEdad.subscribe(eda => this.edad = eda);

    if(this.tmpImg != ""){
      this.profileImage = this.tmpImg;
      this.imgStyle = "border-radius: 50%; background-color: #ffffff; padding: 10px;"
    }
    if(this.modo == "Profile"){
      this.displayConf = false;
      this.infoTitle = this.user?.username;
      console.log(this.displayConf)
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
      localStorage.setItem('profileImg', this.profileImage);
      this.appService.setImgProfile(this.profileImage);
    }
    this.message = '';
  }

  resetImg(){
    console.log("reset");
    this.profileImage = "/assets/profile-img.png";
    this.deleteIcon = "";
    this.uploadIcon = "/assets/upload-icon.png";
    this.actionMsg = "Adjunta una foto";
    this.imgStyle = ""
    localStorage.setItem('profileImg', '');
    this.appService.setModoProfile('');
  }
}
