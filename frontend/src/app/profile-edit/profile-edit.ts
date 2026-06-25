import { Component, inject } from '@angular/core';
import { Nav } from "../nav/nav";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  imports: [Nav],
  templateUrl: './profile-edit.html',
  styleUrl: './profile-edit.css',
})
export class ProfileEdit {
  route = inject(ActivatedRoute);

  name = '';
  field = '';
  index ='';

  ngOnInit(){
    this.name = this.route.snapshot.params['name'];
    this.field = this.route.snapshot.params['field'];
    this.index = this.route.snapshot.params['index'];
  }
}
