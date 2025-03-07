import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'sunflower';
  public changeMode(isDarkMode: boolean) {
    if (isDarkMode)
      document.body.classList.add('dark-mode');
    else
      document.body.classList.remove('dark-mode');

  }
}
