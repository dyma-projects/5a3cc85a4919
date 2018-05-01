import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  public lienImage: string = 'http://www.amouretamitie2002.com/bonnefetedutravail/images/fete-du-travail.jpg';
  public data: string;
  public status: boolean = true;
  public texts: string[] = ['un', 'deux', 'trois'];

  constructor() { }

  ngOnInit() {
  }

  changeStatus() {
    this.status = !this.status;
  }

  inverseStatus() {
    return !this.status;
  }

}
