import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
   tabName = "new Tab"
  constructor() {
   }
    
  ngOnInit() {
  }

}
