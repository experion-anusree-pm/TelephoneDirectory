import { Component, Input } from '@angular/core';
import { Contact } from '../Contact';
import{ContactServeService} from '../contact-serve.service';
@Component({
  selector: 'td-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  contactPullObject:Contact[];
 @Input() searchKeyGet:String;

  constructor(private contactrserv: ContactServeService) {
    this.contactPullObject=this.contactrserv.ContactPull();
   //alert(this.searchKeyGet);   
     //alert(this.contactPullObject[0].firstName);
  }
  

}
