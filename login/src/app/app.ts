import { Component } from '@angular/core'; // <-- ADD THIS LINE AT THE VERY TOP!

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css', '../styles.css']
})
export class AppComponent {
title = 'Sleep Deprived';

}