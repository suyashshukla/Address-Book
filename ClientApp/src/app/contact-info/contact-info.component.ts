import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormService } from '../form-service';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})

export class ContactInfo {

  constructor(private services: FormService) {}

  @Input() details;
  @Output() triggerRefresh = new EventEmitter();
  @Output() triggerForm = new EventEmitter();

  editData() {
    this.services.showForm(this.details);
    this.triggerForm.emit();
  }

  deleteData() {
    this.services.removeContact(this.details);
    this.triggerRefresh.emit();
    this.details = null;
  }

  }
