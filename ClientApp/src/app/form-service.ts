import { Injectable } from '@angular/core';

@Injectable()

export class FormService {

  contacts = [
    {
      name: 'Suyash Shukla',
      email: 'imsuyash97@gmail.com',
      mobile: '8319279074',
      landline: '7896541236',
      address: 'Gayatri Nagar, Hyderabad',
      website : 'www.kavyastrot.com'
    },
    {
      name: 'Chris Tremlett',
      email: 'chris97@gmail.com',
      mobile: '874596352',
      landline: '7896541236',
      address: 'Down Town, Britain',
      website: 'www.ecb.co.uk'
    }];

  formVisibility = false;
  formData = {};

  addContact(addC) {
    this.contacts.push(addC);
  }

  removeContact(removeC) {
    this.contacts = this.contacts.filter(c => c != removeC);
  }

  showForm(fData) {
    this.formVisibility = true;
    this.formData = fData;
  }

  getContacts() {
    return this.contacts;
  }

  updateContact(updateC, originalC) {
    this.contacts[this.contacts.indexOf(originalC)] = updateC;
    this.formData = updateC;
  }

}
