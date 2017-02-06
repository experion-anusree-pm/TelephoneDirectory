import { Component } from '@angular/core';
import { Contact } from './Contact';

@Component({
  selector: 'td-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'td works!';
  contactDetailsEmited:Contact;
}
