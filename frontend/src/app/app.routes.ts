import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Main } from './main/main';
import { ProfileHari } from './profile-hari/profile-hari';
import { ProfileNina } from './profile-nina/profile-nina';
import { ProfileAnna } from './profile-anna/profile-anna';
import { ProfileBrenda } from './profile-brenda/profile-brenda';

export const routes: Routes = [
{path: '', component: Login, pathMatch: 'full'},

{path: 'main', component: Main},
{path: 'profile/hari', component: ProfileHari},
{path: 'profile/brenda', component: ProfileBrenda},
{path: 'profile/anna', component: ProfileAnna},
{path: 'profile/nina', component: ProfileNina}

]