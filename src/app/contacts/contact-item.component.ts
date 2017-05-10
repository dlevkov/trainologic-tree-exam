import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dl-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {
  @Input() public item: any;
  @Input() public level = 0;
  constructor() { }

  ngOnInit() {
  }

}
