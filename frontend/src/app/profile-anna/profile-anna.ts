import { Component, OnInit, inject, signal } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";
import { BackendService } from '../shared/backend';
import { CommonModule } from '@angular/common';
import { Profile } from '../shared/profile';
import { RouterLink } from "@angular/router";



@Component({
  selector: 'app-profile-anna',
  imports: [Nav, Footer, CommonModule, RouterLink],
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



}
