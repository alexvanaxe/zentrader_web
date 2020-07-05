import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleModeService {

  constructor() { }

  isNightMode(): boolean {
    const mode = localStorage.getItem('mode');
    if (mode === 'night') {
      return true;
    } else {
      return false;
    }
  }

  toggleModeNight() {
    document.body.classList.add('animate-colors-transiction');
    if (this.isNightMode()) {
      localStorage.setItem('mode', 'light');
      document.body.classList.remove('theme_night');
      document.body.classList.add('theme_light');
    } else {
      localStorage.setItem('mode', 'night');
      document.body.classList.remove('theme_light');
      document.body.classList.add('theme_night');
    }
  }


  applyMode() {
    if (this.isNightMode()) {
      document.body.classList.remove('theme_light');
      document.body.classList.add('theme_night');
    } else {
      document.body.classList.remove('theme_night');
      document.body.classList.add('theme_light');
    }
  }
}
