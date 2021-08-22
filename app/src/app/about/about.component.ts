import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
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
