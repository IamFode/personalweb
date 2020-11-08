import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public mail: string;

  constructor() { 
    this.title = "Soy una historia más ...";
    this.mail = "cparedesa3@fcpn.edu.bo"
  }

  ngOnInit(): void {
  }

}
