import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
  from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Contact } from '../Contact';
import{ContactServeService} from '../contact-serve.service';



@Component({
  selector: 'td-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent {
  contactObject: Contact[];
 obj:Contact;
 
 // @Output() contactDetails = new EventEmitter<Contact>();
  name:String;
  firstName: String;
  phoneNumber: Number;
  lastName: String;
  Address: String;
  flag:boolean=false;
  f:number;
 constructor(private contactrserv: ContactServeService) {
  }

  onChangeValidate(phvalue)
  {
 this.flag=this.contactrserv.onChangeValidate(phvalue);
  }
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
  
     this.firstName = form.value.txtFirstName;
    this.lastName = form.value.txtLastName;
    
    this.phoneNumber = form.value.txtPhoneNumber;
    this.Address = form.value.txtAddress;
    console.log(form);
      if(this.flag){
      this.phoneNumber=0;
    }
   this.contactrserv.ContactPush(new Contact(this.firstName, this.lastName, this.phoneNumber,this.Address));
  }
 
   
  }




