import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  public map: any = { lat: 51.678418, lng: 7.809007 };
  constructor() { }

  ngOnInit(): void {
  }

}
