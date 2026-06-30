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
   profile= signal<Profile[]>([]);

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
}
