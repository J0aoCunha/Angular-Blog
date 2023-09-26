import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://miro.medium.com/v2/resize:fit:720/0*1yo17Ov28sa7p33N"
  contentText1: string = "We are delighted to announce that we’ve collaborated with the online interactive code learning platform Sololearn to develop an introductory course to Angular. The course is available for free on Sololearn’s platform to anyone who wants to learn Angular."
  contentText: string = "With hands-on coding exercises and projects, learners get practical experience working with real examples of Angular code. They’ll learn the fundamentals of Angular, such as components, routing, and more."


  constructor() { }

  ngOnInit(): void {
  }

}
