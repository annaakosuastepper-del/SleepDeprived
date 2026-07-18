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
   profile= signal<Profile[]>([]); //signal to hold the profile data, defined with the type Profile[] to match the expected data structure,and initialized as an empty array to ensure it starts with a valid state.

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


triggerFileInput() {
  document.getElementById('fileInput')?.click();
}

onFileSelect(event: any) {
  const file = event.target.files[0];
  console.log('Selected file:', file);
}

onDragOver(event: DragEvent) {
  event.preventDefault();
}

onDrop(event: DragEvent) {
  event.preventDefault();
  const files = event.dataTransfer?.files;
  if (files && files.length > 0) {
    console.log('Dropped files:', files);
  }
}
}
