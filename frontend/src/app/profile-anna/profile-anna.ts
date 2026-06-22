import { Component, OnInit, inject } from '@angular/core';
import { Nav } from "../nav/nav";
import { Footer } from "../footer/footer";
import { BackendService } from '../shared/backend';




@Component({
  selector: 'app-profile-anna',
  imports: [Nav, Footer],
  templateUrl: './profile-anna.html',
  styleUrl: './profile-anna.css',
})
export class ProfileAnna implements OnInit {
   profile: any = null;

  backendService = inject(BackendService);

  async ngOnInit() {
    this.profile = await this.backendService.getOne('anna');
  }
}
