import { Injectable } from '@angular/core';
import { Profile} from "./profile";

@Injectable({
    providedIn: 'root'
})

export class BackendService{
    apiURL = 'http://localhost: 3000'

    constructor() { }

    async getAll(): Promise<Profile []> {
        let response = await fetch(this.apiURL + '/profiles');
        let profiles = await response.json();
        return profiles;
    }
      async getOne(name: string): Promise<Profile> {
    let response = await fetch(this.apiURL + '/profiles/' + name);
    let profile = await response.json();
    return profile;
  }

  async update(name: string, profile: Profile): Promise<Profile> {
    let response = await fetch(this.apiURL + '/profiles/' + name, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    });
    let updated = await response.json();
    return updated;
  }

}

