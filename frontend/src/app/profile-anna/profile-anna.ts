import { Component, OnInit, inject, signal } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";
import { BackendService } from '../shared/backend';
import { CommonModule } from '@angular/common';
import { Profile } from '../shared/profile';



@Component({
  selector: 'app-profile-anna',
  imports: [Nav, Footer, CommonModule],
  templateUrl: './profile-anna.html',
  styleUrl: './profile-anna.css',
})
export class ProfileAnna implements OnInit {
   profile= signal<Profile[]>([]);

  backendService = inject(BackendService);

  async ngOnInit() {
    const data = await this.backendService.getAll();
    this.profile.set(data);
    console.log('Service:', this.profile());
  }
}
