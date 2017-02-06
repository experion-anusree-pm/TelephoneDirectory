import { Component, OnInit } from '@angular/core';
import { ContactServeService } from '../contact-serve.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../Contact';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'td-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: []
})
export class EditContactComponent implements OnInit {

  indexvalueEdit: number;
  editObject: Contact;
  name: String;
  firstName: String;
  phoneNumber: Number;
  lastName: String;
  Address: String;

  constructor(route: ActivatedRoute, private contactrserv: ContactServeService) {
    this.indexvalueEdit = route.snapshot.params['id'];
    //alert(this.indexvalueEdit);
    ; this.editObject = contactrserv.getContactDetail(this.indexvalueEdit);

  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.firstName = form.value.txtFirstName;
    this.lastName = form.value.txtLastName;
    this.phoneNumber = form.value.txtPhoneNumber;
   
    // this.contactDetails.emit(this.contactrserv.ContactPush(form));
    this.contactrserv.ContactEditPush(new Contact(this.firstName, this.lastName, this.phoneNumber, this.Address),this.indexvalueEdit);
  }
}
