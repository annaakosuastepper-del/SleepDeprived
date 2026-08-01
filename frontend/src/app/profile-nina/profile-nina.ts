import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";
import { BackendService } from '../shared/backend';
import { CommonModule } from '@angular/common';
import { Profile } from '../shared/profile';
import { RouterLink, Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-nina',
  imports: [Nav, Footer, CommonModule, RouterLink, FormsModule ],
  templateUrl: './profile-nina.html',
  styleUrl: './profile-nina.css',
})
export class ProfileNina implements OnInit {
   profile= signal<Profile[]>([]);

  backendService = inject(BackendService);

  async ngOnInit() {
    const data = await this.backendService.getOne('nina');
    this.profile.set(data);
    console.log('Profile-nina:', this.profile());
    this.selectedHeader = this.profile()[0].headerImage || 'ninaTitle1.png';
    this.selectedFrame = this.profile()[0].pictureFrame || '';
    this.selectedBioColor = this.profile()[0].bioColor || '';
    this.selectedSocialColor = this.profile()[0].socialColor || '';
    this.selectedCv = this.profile()[0].cvHeader || '';
    this.selectedBox = this.profile()[0].boxColor || '';
    this.selectedFileColor = this.profile()[0].fileBoxColor || '';
    this.selectedSkillsColor = this.profile()[0].skillsColor || '';
  }

  async deleteOne(index: number) {
    await this.backendService.deleteOne('nina', index);
    const data = await this.backendService.getOne('nina');
    this.profile.set(data);
  }

  searchTerm= '';
  search(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
  }

  selectedFiles: any[] = [];
  selectedFileName = '';

  triggerFileInput() {
    document.getElementById('fileInput')?.click();
  }

  onFileSelect(event: any) {
    const file = event.target.files;
    for(let i = 0; i < file.length; i++){
          this.selectedFiles.push(file[i]);
          this.selectedFileName = file[i].name;
      }
    console.log('Selected file:', file);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer?.files;
    if(file) {
      for(let i = 0; i < file.length; i++){
          this.selectedFiles.push(file[i]);
          this.selectedFileName = file[i].name;
      }
      console.log('Dropped file:', file);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    console.log('drop fired!');
  }

  async onUploadFiles() {
    const fromData = new FormData();
    for(let i = 0; i < this.selectedFiles.length; i++){
        fromData.append('file', this.selectedFiles[i]);
    }

    fetch('http://localhost:3000/api/upload', {
      method: 'POST',
      body: fromData,
    })
    .then(res => res.text())
    .then(data =>console.log('File uploaded successfully:', data))

    for(let file of this.selectedFiles){
        this.profile()[0].files.push(file.name);
    }
    await this.backendService.update('nina', this.profile()[0]);

    const updated = await this.backendService.getOne('nina');
    this.profile.set(updated);
    this.selectedFiles = [];
  }

  RemoveFile(fileName: string){
      for(let i = 0; i < this.selectedFiles.length; i++){
        if(this.selectedFiles[i].name === fileName){
            this.selectedFiles.splice(i, 1);
            break;
        }
      }
  }

  async DeleteFile(fileName: string){
    await fetch(`http://localhost:3000/api/uploads/${fileName}`, {
      method: 'DELETE',
    })

    const fileIndex = this.profile()[0].files.indexOf(fileName);
    if(fileIndex !== -1){
        this.profile()[0].files.splice(fileIndex, 1);
        await this.backendService.update('nina', this.profile()[0]);
        const data = await this.backendService.getOne('nina');
        this.profile.set(data);
    }

    for(let i = 0; i < this.selectedFiles.length; i++){
        if(this.selectedFiles[i].name === fileName){
            this.selectedFiles.splice(i, 1);
            break;
        }
      }
  }

  async openFile(fileName: string) {
    const blob = await this.backendService.getFile(fileName);
    console.log('Blob:', blob);
    const url = window.URL.createObjectURL(blob);
    window.open(url, '_blank');
  }

  picturelink ="";

  async uploadPic() {
    const fromData = new FormData();
    for(let i = 0; i < this.selectedFiles.length; i++){
        fromData.append('file', this.selectedFiles[i]);
    }

    await fetch('http://localhost:3000/api/profilePic', {
      method: 'POST',
      body: fromData,
    })
    .then(res => res.text())
    .then(data =>console.log('Picture uploaded successfully:', data))

    this.profile()[0].profilePicture = this.selectedFileName;
    await this.backendService.update('nina', this.profile()[0]);

    const updated = await this.backendService.getOne('nina');
    this.profile.set(updated);

    this.selectedFiles = [];
    this.selectedFileName = '';
  }

  async updatePic(){
    const oldFileName = this.profile()[0].profilePicture;
    await fetch(`http://localhost:3000/api/profilePic/${oldFileName}`, {
      method: 'DELETE',
    })
    await this.uploadPic();
  }

  isAdmin = localStorage.getItem('role') === 'admin';

  selectedHeader = 'hariTitle1.png';
  showHeaderOptions = false;

  async selectHeader(imageName: string){
    this.selectedHeader = imageName;
    this.profile()[0].headerImage = imageName;
    await this.backendService.update('nina', this.profile()[0]);
  }

  showFrameOptions = false;
  selectedFrame = '';

  async selectFrame(frameName: string){
    this.selectedFrame = frameName;
    this.profile()[0].pictureFrame = frameName;
    await this.backendService.update('nina', this.profile()[0]);
  }

  showBioColorOptions = false;
  selectedBioColor = '';

  async selectBioColor(bioColor: string){
    this.selectedBioColor = bioColor;
    this.profile()[0].bioColor = bioColor;
    await this.backendService.update('nina', this.profile()[0]);
  }

  showSocialColorOptions = false;
  selectedSocialColor ='';

  async selectSocialColor(socialColor: string){
    this.selectedSocialColor = socialColor;
    this.profile()[0].socialColor = socialColor;
    await this.backendService.update('nina', this.profile()[0]);
  }

  showCvOptions = false;
  selectedCv = '';

  async selectCv(CV: string){
    this.selectedCv= CV;
    this.profile()[0].cvHeader = CV;
    await this.backendService.update('nina', this.profile()[0]);
  }

  showBoxOptions = false;
  selectedBox = ' ';

  async selectBox(Box: string){
    this.selectedBox= Box;
    this.profile()[0].boxColor = Box;
    await this.backendService.update('nina', this.profile()[0]);
  }

  showFileOptions = false;
  selectedFileColor = '';

  async selectFileColor(file: string){
    this.selectedFileColor= file;
    this.profile()[0].fileBoxColor = file;
    await this.backendService.update('nina', this.profile()[0]);
  }

  showSkillsOptions = false;
  selectedSkillsColor = '';

  async selectSkillsColor(file: string){
    this.selectedSkillsColor= file;
    this.profile()[0].skillsColor = file;
    await this.backendService.update('nina', this.profile()[0]);
  }

  leftPupilX = 0; leftPupilY = 0;
  rightPupilX = 0; rightPupilY = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;

    const xRatio = (event.clientX / width) * 2 - 1;
    const yRatio = (event.clientY / height) * 2 - 1;

    const dist = 10;
    this.leftPupilX  = xRatio * dist;
    this.leftPupilY  = yRatio * dist;
    this.rightPupilX = xRatio * dist;
    this.rightPupilY = yRatio * dist;
  }

  private router = inject(Router);

  
  prevProfile() {
    this.router.navigate(['/profile/hari']);
  }

  nextProfile() {
    this.router.navigate(['/profile/anna']);
  }

  newLinkPlatform = '';
  newLinkUrl = '';

  async addLink(platform: string, url: string) {
    if (!platform || !url) return;

    if (!this.profile()[0].socialLinks) {
      this.profile()[0].socialLinks = [];
    }
    this.profile()[0].socialLinks.push({ platform, url });

    await this.backendService.update('nina', this.profile()[0]);

    const updated = await this.backendService.getOne('nina');
    this.profile.set(updated);

    this.newLinkPlatform = '';
    this.newLinkUrl = '';
  }

  boxToDelete = -1;
}