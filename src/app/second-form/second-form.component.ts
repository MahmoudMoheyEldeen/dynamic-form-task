import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LanguageServiceService } from '../services/language-service.service';
import {
  TranslocoDirective,
  TranslocoModule,
  TranslocoPipe,
} from '@jsverse/transloco';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-second-form',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoDirective,
    TranslocoModule,
    TranslocoPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './second-form.component.html',
  styleUrl: './second-form.component.scss',
})
export class SecondFormComponent implements OnInit {
  currentLanguage: string = '';
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      ID: this.fb.control('', Validators.required), // to enter class ID
      inputter: this.fb.control('', Validators.required), // inputter field
      student: this.fb.array([this.createStudentGroup()]), // Array for student groups
    });
  }

  // Create student FormGroup
  createStudentGroup(): FormGroup {
    return this.fb.group({
      studentNo: this.fb.control('', Validators.required), // Student number
      studentName: this.fb.control('', Validators.required), // Student name
      student$contactDetail: this.fb.array([this.createContactDetailGroup()]), // Nested contact details
    });
  }

  // Create contact detail FormGroup
  createContactDetailGroup(): FormGroup {
    return this.fb.group({
      contactNumber: this.fb.control('', Validators.required), // Contact number
      relation: this.fb.control('', Validators.required), // Relation
    });
  }

  // Get FormArray for students
  getStudentsArray(): FormArray {
    return this.form.get('student') as FormArray;
  }

  // Get FormArray for contact details
  getContactDetailArray(studentIndex: number): FormArray {
    return this.getStudentsArray()
      .at(studentIndex)
      .get('student$contactDetail') as FormArray;
  }

  // Add more student fields
  addStudent(): void {
    this.getStudentsArray().push(this.createStudentGroup());
  }

  // Add more contact details for a student
  addContactDetail(studentIndex: number): void {
    this.getContactDetailArray(studentIndex).push(
      this.createContactDetailGroup()
    );
  }

  // Remove a student
  removeStudent(index: number): void {
    this.getStudentsArray().removeAt(index);
  }

  // Remove a contact detail for a specific student
  removeContactDetail(studentIndex: number, contactIndex: number): void {
    this.getContactDetailArray(studentIndex).removeAt(contactIndex);
  }

  submit(): void {
    const formData = this.form.value;
    console.log(formData);
  }

  trySweetalert() {
    Swal.fire('SweetAlert2 is working!');
  }
}
