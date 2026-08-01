import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";
import { BackendService } from '../shared/backend';
import { CommonModule } from '@angular/common';
import { Profile } from '../shared/profile';
import { RouterLink } from "@angular/router";




@Component({
  selector: 'app-profile-anna',
  imports: [Nav, Footer, CommonModule, RouterLink ],
  templateUrl: './profile-anna.html',
  styleUrl: './profile-anna.css',
})
export class ProfileAnna implements OnInit {
   profile= signal<Profile[]>([]); //waits for data to be fetched from backend and then updates the view  

  backendService = inject(BackendService);

  async ngOnInit() {
    const data = await this.backendService.getAll();
    this.profile.set(data);
    console.log('Profile-anna:', this.profile());
    this.selectedHeader = this.profile()[0].headerImage || 'annaTitle1.png';
    this.selectedFrame = this.profile()[0].pictureFrame || '';
    this.selectedBioColor = this.profile()[0].bioColor || '';
    this.selectedRoleColor = this.profile()[0].roleColor || '';
    this.selectedCv = this.profile()[0].cvHeader || '';
    this.selectedBox = this.profile()[0].boxColor || '';
    this.selectedFileColor = this.profile()[0].fileBoxColor || '';

  }

  async deleteOne(index: number) {
    await this.backendService.deleteOne('anna', index);
    const data = await this.backendService.getAll();
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
 
if(file)   {     
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
        await this.backendService.update('anna', this.profile()[0]);
        
        // refresh profile
        const updated = await this.backendService.getAll();
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
        await this.backendService.update('anna', this.profile()[0]);
        const data = await this.backendService.getAll();
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
  await this.backendService.update('anna', this.profile()[0]);

    const updated = await this.backendService.getAll();
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

 selectedHeader = 'annaTitle1.png';
 showHeaderOptions = false;


 async selectHeader(imageName: string){
    console.log('selectHeader called with:', imageName);
    this.selectedHeader = imageName;
    this.profile()[0].headerImage = imageName;
    await this.backendService.update('anna', this.profile()[0]);
 }

  showFrameOptions = false;
  selectedFrame = '';

  async selectFrame(frameName: string){
    this.selectedFrame = frameName;
    this.profile()[0].pictureFrame = frameName;
    await this.backendService.update('anna', this.profile()[0]);
  }

  showBioColorOptions = false;
  selectedBioColor = '';

   async selectBioColor(bioColor: string){
    this.selectedBioColor = bioColor;
    this.profile()[0].bioColor = bioColor;
    await this.backendService.update('anna', this.profile()[0]);
  }

  showRoleColorOptions = false;
  selectedRoleColor ='';

  async selectRoleColor(roleColor: string){
    this.selectedRoleColor = roleColor;
    this.profile()[0].roleColor = roleColor;
    await this.backendService.update('anna', this.profile()[0]);
  }

  showCvOptions = false;
  selectedCv = '';

  async selectCv(CV: string){
    this.selectedCv= CV;
    this.profile()[0].cvHeader = CV;
    await this.backendService.update('anna', this.profile()[0]);
  }

  showBoxOptions = false;
  selectedBox = ' ';

  async selectBox(Box: string){
    this.selectedBox= Box;
    this.profile()[0].boxColor = Box;
    await this.backendService.update('anna', this.profile()[0]);
  }

  showFileOptions = false;
  selectedFileColor = '';

  async selectFileColor(file: string){
    this.selectedFileColor= file;
    this.profile()[0].fileBoxColor = file;
    await this.backendService.update('anna', this.profile()[0]);
  }
leftPupilX = 0; leftPupilY = 0;
rightPupilX = 0; rightPupilY = 0;

  @HostListener('document:mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  const xRatio = (event.clientX / window.innerWidth) * 2 - 1;
  const yRatio = (event.clientY / window.innerHeight) * 2 - 1;

  const dist = 4;
  this.leftPupilX  = xRatio * dist;
  this.leftPupilY  = yRatio * dist;
  this.rightPupilX = xRatio * dist;
  this.rightPupilY = yRatio * dist;
}

}
