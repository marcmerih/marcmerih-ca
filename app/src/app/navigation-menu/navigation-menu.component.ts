import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  constructor(private session: SessionService) { }

  ngOnInit(): void {
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

  navigateTo(url: string) {
    this.session.navigateTo(url);
  }

  get shouldDisplaySideNav(): boolean {
    if (this.session.screenWidth) {
      return (this.session.screenWidth > 620);
    }
    return false;
  }
}
