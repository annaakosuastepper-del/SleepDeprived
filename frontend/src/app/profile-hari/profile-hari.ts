import { Component, HostListener, OnInit, inject, signal } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";
import { BackendService } from '../shared/backend';
import { CommonModule } from '@angular/common';
import { Profile } from '../shared/profile';
import { RouterLink, Router } from "@angular/router";




@Component({
  selector: 'app-profile-hari',
  imports: [Nav, Footer, CommonModule, RouterLink ],
  templateUrl: './profile-hari.html',
  styleUrl: './profile-hari.css',
})
export class ProfileHari implements OnInit {
   profile= signal<Profile[]>([]); //waits for data to be fetched from backend and then updates the view  

  backendService = inject(BackendService);

  async ngOnInit() {
    

  }

}

