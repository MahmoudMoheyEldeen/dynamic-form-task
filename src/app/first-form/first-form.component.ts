import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LanguageServiceService } from '../services/language-service.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslocoDirective, TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-first-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    TranslocoDirective,
    TranslocoPipe,
  ],
  templateUrl: './first-form.component.html',
  styleUrl: './first-form.component.scss',
})
export class FirstFormComponent implements OnInit {
  currentLanguage: string = '';
  form!: FormGroup;

  testTable_01_JsonData = {
    table_name: 'tabletest1',
    fieldName: [
      {
        fieldName: 'street',
        type: 'string',
        mandatory: true,
        Group: 'addressDetail',
      },
      {
        fieldName: 'zipCode',
        type: 'int',
        isMulti: false,
        mandatory: true,
        Group: 'addressDetail',
      },
      {
        fieldName: 'buildingNo',
        type: 'int',
        mandatory: true,
        Group: 'addressDetail',
      },
      { fieldName: 'StudentName', type: 'string' },
      { fieldName: 'phoneNumbers', type: 'string', isMulti: true },
    ],
    record_count: 1,
  };

  constructor(
    private fb: FormBuilder,
    private languageService: LanguageServiceService
  ) {
    this.languageService.selectedLanguage$.subscribe((lang: any) => {
      this.currentLanguage = lang;
      console.log('from FormOne component', this.currentLanguage);
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  // Build the main form
  buildForm(): void {
    this.form = this.fb.group({
      ID: this.fb.control('', Validators.required),
      addressDetail: this.fb.array([]),
      StudentName: this.fb.control('', Validators.required),
      phoneNumbers: this.fb.array([this.fb.control('')]),
    });

    // Add the first address group
    this.addAddressGroup();
  }

  // Get FormArray for addressDetail
  getAddressDetailArray(): FormArray {
    return this.form.get('addressDetail') as FormArray;
  }

  // Get FormArray for phoneNumbers
  getPhoneNumbersArray(): FormArray {
    return this.form.get('phoneNumbers') as FormArray;
  }

  // Add an address group to the addressDetail array
  addAddressGroup(): void {
    const addressDetailArray = this.getAddressDetailArray();
    const addressGroup = this.fb.group({});

    this.testTable_01_JsonData.fieldName.forEach((field) => {
      if (field.Group === 'addressDetail') {
        addressGroup.addControl(field.fieldName, this.createFormControl(field));
      }
    });

    addressDetailArray.push(addressGroup);
  }

  // Create a form control with validation
  createFormControl(field: any): FormControl {
    const validators = [];
    if (field.mandatory) {
      validators.push(Validators.required);
    }
    return this.fb.control('', validators);
  }

  // Add more phone number fields
  addMultiField(fieldName: string): void {
    const control = this.form.get(fieldName) as FormArray;
    control.push(this.fb.control(''));
  }

  // Add more address entries
  addAddressEntry(): void {
    this.addAddressGroup();
  }

  removeAddress(index: number): void {
    this.getAddressDetailArray().removeAt(index);
  }

  removePhone(index: number): void {
    this.getPhoneNumbersArray().removeAt(index);
  }

  // Handle form submission
  submit(): void {
    const formData = this.form.value;
    console.log({
      ID: formData.ID,
      addressDetail: formData.addressDetail,
      StudentName: formData.StudentName,
      phoneNumbers: formData.phoneNumbers,
    });
  }

  // Show SweetAlert2 popup
  trySweetalert() {
    Swal.fire('SweetAlert2 is working!');
  }
}
