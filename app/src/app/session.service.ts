import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  screenWidth: number | undefined;
  screenHeight: number | undefined;

  constructor(private router: Router) { }

  navigateToMenu(): void {
    this.router.navigateByUrl('menu');
  }

  navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  downloadResume(): void {
    window.open('../../assets/MarcMerih-CV.pdf', '_blank');
  }

  openGithub(): void {
    window.open('https://github.com/marcmerih', '_blank');
  }

  openInstagram(): void {
    window.open('https://www.instagram.com/marcmerih/', '_blank');
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/merihatasoy/', '_blank');
  }

  openYouTube(): void {
    window.open('https://www.youtube.com/channel/UCCD0tEPefZowZeeF9l8tinQ', '_blank');
  }

  get shouldDisplaySideNav(): boolean {
    return this.router.url !== '/menu';
  }
}
