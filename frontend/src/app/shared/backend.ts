import { Injectable } from '@angular/core';
import { Profile} from "./profile";

@Injectable({
    providedIn: 'root'
})

export class BackendService{
    apiURL = 'http://localhost:3000'

    constructor() { }

    async getAll(): Promise<Profile[]> {
        let response = await fetch(this.apiURL + '/profiles');
        let profiles = await response.json();
        console.log('Service:', profiles)
        return profiles;
    }

  async getOne(name: string): Promise<Profile[]> {
    let response = await fetch(this.apiURL + '/profiles/' + name);
    let profile = await response.json();
    return profile;
  }

  async getFile(fileName: string): Promise<Blob> {
    let response = await fetch(this.apiURL + '/uploads/' + fileName);
    if (!response.ok) {
      throw new Error('Failed to fetch file: ' + response.statusText);
    }
    let fileBlob = await response.blob();
    return fileBlob;
  }

  async update(name: string, updateData: Profile): Promise<Profile> {
    console.log('sending to backend:', name, updateData);
    
    let response = await fetch(this.apiURL + '/profiles/' + name, {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData)
    });
    let updated = await response.json();
    return updated;
  }
  
    async deleteOne(name: String, boxIndex: number): Promise<{message: string}> {
     
    let response = await fetch(this.apiURL + '/profiles/'+ name + '/boxes/' + boxIndex,{
      method: "DELETE"
    });
     if (!response.ok) {
    const text = await response.text();
    console.error('deleteOne failed:', response.status, text);
    throw new Error(`Failed to delete box (${response.status})`);
  }
    let message = await response.json();
    console.log('message in service (deleteOne) : ', message)
    return message;

  }

      


  async createBox(name: String, newBox:{title: String, content: String}): Promise<{message: string}> {
        console.log('createBox called!', name, newBox);
    let response = await fetch(this.apiURL + '/profiles/'+ name + '/boxes' ,{
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBox)
    });
    let message = await response.json();
    console.log('message in service (createBox) : ', message)
    return message;
  }



}

