import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vitae',
  templateUrl: './vitae.component.html',
  styleUrls: ['./vitae.component.scss']
})
export class VitaeComponent implements OnInit {
  @Input() title: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
