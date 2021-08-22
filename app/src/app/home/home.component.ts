import { Component, OnInit, HostListener, OnChanges, AfterViewInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  screenHeight: number | undefined;
  screenWidth: number | undefined;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.session.screenHeight = window.innerHeight;
    this.session.screenWidth = window.innerWidth;
 }

  constructor(private session: SessionService) { }

  ngOnInit(): void {
    this.onResize();
  }
  
  ngAfterViewInit(): void {
    this.onResize();
  }
  
  navigateToMenu(): void {
    this.session.navigateTo('about');
  }

  get shouldDisplaySideNav(): boolean {
    if (this.session.screenWidth) {
      return (this.session.screenWidth > 620);
    }
    return false;
  }
}
