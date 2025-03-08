import { Component, EventEmitter, Output, output, signal, WritableSignal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BehaviorSubject, from, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
})
export class NavbarComponent {
  public isDarkMode: WritableSignal<boolean> = signal(false);
  @Output("isDarkMode") isDarkModeChange = toObservable(this.isDarkMode);

  public changeTheme() {
    this.isDarkMode.update((prev) => !prev);
  }
}
