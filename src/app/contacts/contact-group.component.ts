import { Component, OnInit, Input } from '@angular/core';

const PADDING_LEFT = 20;
@Component({
  selector: 'dl-contact-group',
  templateUrl: './contact-group.component.html',
  styleUrls: ['./contact-group.component.css']
})
export class ContactGroupComponent  {
  @Input() public group: any;
  @Input() public level: number;
  public isHidden = true;

  public getPadding(): number {
    return this.level * PADDING_LEFT;
  }
}
