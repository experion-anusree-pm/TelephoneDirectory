import { Injectable } from '@angular/core';
import { Contact } from './Contact';



@Injectable()
export class ContactServeService {

  arContact: Contact[]=[]; 
  viewContactObject:Contact;
  // Function to add
  ContactPush(objectContact: Contact) {

   this.arContact.push(objectContact);
  }

// Function to pull
  ContactPull() {

   return this.arContact;     
  }
  

  //Function to get contact
  getContactDetail(i:number)
  {   
      return this.arContact[i];
    }

    //Push Edit Contact
    ContactEditPush(objectContact: Contact,indexedit:number)
    {
      
    this.arContact.splice(indexedit,1,objectContact);
    }

    //unique check

     onChangeValidate(ph:number){
       for (let phno of this.arContact) {
         if ((phno.phoneNumber.search(ph)) >= 0){
           alert("Number already Exists");
           return false;
         }
       }
    console.log(ph);
    }
}
