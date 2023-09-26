import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsive.component.css']
})
export class SmallCArdComponent implements OnInit {

  @Input()
  photoCover: string = ""
  @Input()
  cardDescription: string = ""
  @Input()
  id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
