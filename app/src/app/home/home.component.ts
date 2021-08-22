import { Component, OnInit, HostListener, OnChanges, AfterViewInit } from '@angular/core';

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
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
 }

  constructor() { }

  ngOnInit(): void {
    this.onResize();
  }
  
  ngAfterViewInit(): void {
    this.onResize();
  }

  get shouldDisplaySideNav(): boolean {
    if (this.screenWidth) {
      return (this.screenWidth > 620);
    }
    return false;
  }
}
