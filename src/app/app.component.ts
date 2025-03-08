import { Component } from '@angular/core';
import { provideRouter, RouterOutlet, Routes, withDebugTracing } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  public changeMode(isDarkMode: boolean) {
    if (isDarkMode)
      document.body.classList.add('dark-mode');
    else
      document.body.classList.remove('dark-mode');

  }
}
