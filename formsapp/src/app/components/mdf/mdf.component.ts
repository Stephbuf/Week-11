import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf',
  standalone: false,
  templateUrl: './mdf.component.html',
  styleUrl: './mdf.component.css'
})
export class MdfComponent {
userForm;

constructor(private fb: FormBuilder){
  this.userForm = fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: [''],
    phone: ['']
  });
}

onSubmit(){
  this.nameFormControl;
  console.log(this.userForm.value);
}

//Getter methods 

get nameFormControl() {
  return this.userForm.get('name')!; // will return name from control 
}
get emailFormControl() {
  return this.userForm.get('email')!; // will return email from control 
}
get phoneFormControl() {
  return this.userForm.get('phone')!; // will return phone from control 
}
}
