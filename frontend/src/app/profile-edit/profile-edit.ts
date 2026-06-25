import { Component, inject, OnInit } from '@angular/core';
import { Nav } from "../nav/nav";
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../shared/backend';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';



//my detail component
@Component({
  selector: 'app-profile-edit',
  standalone: true,
  imports: [Nav, ReactiveFormsModule],
  templateUrl: './profile-edit.html',
  styleUrl: './profile-edit.css',
})
export class ProfileEdit implements OnInit{
  
  private bs = inject(BackendService)
  private route = inject(ActivatedRoute)
  private router = inject(Router)

  profile: any;
  name = '';
  field = '';
  index ='';

   form = new FormGroup({
    bioControl : new FormControl<string>(''),
    roleControl: new FormControl<string>(''),
    titleControl: new FormControl<string>(''),
    contentControl: new FormControl<string>('')
    });



  ngOnInit(){
    this.name = this.route.snapshot.params['name'];
    this.field = this.route.snapshot.params['field'];
    this.index = this.route.snapshot.params['index'];
    console.log(this.name,this.field,this.index)

    this.bs.getOne(this.name!)

    .then ( response => {
      this.profile = response

      this.form.patchValue({
        bioControl: this.profile?.bio,
        roleControl: this.profile?.role,
        titleControl: this.profile?.boxes[this.index]?.content,
        contentControl: this.profile?.boxes[this.index]?.content
      })

      })
    
    .then ( name => console.log('profile in Edit page', this.profile))
    }

    update(){
      const values = this.form.value;

      if(this.field === 'bio'){
        this.profile.bio =  values.bioControl!;
      }
      if(this.field === 'role')this.profile.role = values.roleControl!;
      
      if(this.field === 'boxes'){
        this.profile.boxes[this.index].title = values.titleControl!;
        this.profile.boxes[this.index].content = values.contentControl!;
      }

      this.bs.update(this.name!, this.profile)
      .then( () => this.router.navigate(['profile/'+this.name] ))


    }

    cancel(){
      this.router.navigate(['profile/'+this.name]);
    }
  }