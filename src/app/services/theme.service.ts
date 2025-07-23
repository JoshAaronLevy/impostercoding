import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'preferred-theme';
  private readonly theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Apply theme on initialization and whenever it changes
    effect(() => {
      this.applyTheme(this.theme());
    });
  }

  /**
   * Get the current theme
   */
  getTheme(): Theme {
    return this.theme();
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const newTheme = this.theme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Set a specific theme
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.saveThemePreference(theme);
  }

  /**
   * Get the initial theme based on user preference or system default
   */
  private getInitialTheme(): Theme {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }

    // Default to light theme
    return 'light';
  }

  /**
   * Apply the theme to the document
   */
  private applyTheme(theme: Theme): void {
    // Remove both theme classes first
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    
    // Add the current theme class
    document.documentElement.classList.add(`${theme}-theme`);
    
    // Also set a data attribute for additional styling hooks
    document.documentElement.setAttribute('data-theme', theme);
  }

  /**
   * Save theme preference to localStorage
   */
  private saveThemePreference(theme: Theme): void {
    localStorage.setItem(this.THEME_KEY, theme);
  }

  /**
   * Listen to system theme changes
   */
  listenToSystemThemeChanges(): void {
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      darkModeQuery.addEventListener('change', (e) => {
        // Only update if user hasn't set a preference
        if (!localStorage.getItem(this.THEME_KEY)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
}