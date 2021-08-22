import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, AfterViewInit {

  constructor(private session: SessionService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const progressBar = document.querySelector('.progressBar') as HTMLElement;
    let scrollPercentage = ((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100);
    progressBar.style.height = `${scrollPercentage}%`;
  }
  
  downloadFile() {
    this.session.downloadResume();
  }

  openGithub() {
    this.session.openGithub();
  }

  openYoutube() {
    this.session.openYouTube();
  }

  openLinkedIn() {
    this.session.openLinkedIn();
  }

  openInstagram() {
    this.session.openInstagram();
  }

  navigateToMenu(): void {
    this.session.navigateToMenu();
  }
}
