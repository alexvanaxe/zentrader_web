import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleModeService {

  constructor() { }

  isNightMode(): boolean {
    const mode = localStorage.getItem('mode');
    if (mode === 'theme_night') {
      return true;
    } else {
      return false;
    }
  }

  toggleModeNight() {
    document.body.classList.add('animate-colors-transiction');
    if (this.isNightMode()) {
      localStorage.setItem('mode', 'theme_light');
      document.body.classList.remove('theme_night');
      document.body.classList.add('theme_light');
    } else {
      localStorage.setItem('mode', 'theme_night');
      document.body.classList.remove('theme_light');
      document.body.classList.add('theme_night');
    }
  }

  restoreMode() {
    const mode = localStorage.getItem('mode');
    if (mode) {
      document.body.classList.remove('theme_light');
      document.body.classList.add(mode);
    } else {
      localStorage.setItem('mode', 'theme_night');
      document.body.classList.add('theme_light');
    }

  }

  applyMode(mode: string) {
    document.body.classList.add('animate-colors-transiction');
    const olderMode = localStorage.getItem('mode');
    localStorage.setItem('mode', mode);
    document.body.classList.remove(olderMode);
    document.body.classList.add(mode);
  }

  getApplyedTheme(): string {
    return localStorage.getItem('mode');
  }
}
