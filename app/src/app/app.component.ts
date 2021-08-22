import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private router: Router, public session: SessionService) {}

  ngOnInit() {
    this.router.navigate(['/home']);
    this.onResize();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.session.screenHeight = window.innerHeight;
    this.session.screenWidth = window.innerWidth;
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  get shouldDisplay() {
    return this.session.shouldDisplaySideNav;
  }
}
