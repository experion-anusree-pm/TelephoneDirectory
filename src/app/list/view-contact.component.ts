import { Component, OnInit } from '@angular/core';
import{ContactServeService} from '../contact-serve.service';
import {ActivatedRoute} from '@angular/router';
import { Contact } from '../Contact';

@Component({
  selector: 'td-view-contact',
  templateUrl: './view-contact.component.html',
  styles: []
})
export class ViewContactComponent {
  indexvalue:number;
  viewObject:Contact

  constructor(route: ActivatedRoute,private contactrserv: ContactServeService) { 
    this.indexvalue = route.snapshot.params['id'];
    this.viewObject=contactrserv.getContactDetail(this.indexvalue);
    
}
}
