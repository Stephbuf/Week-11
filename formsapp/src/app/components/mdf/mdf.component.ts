import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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
    name: [''],
    email: [''],
    phone: ['']
  });
}

onSubmit(){
  console.log(this.userForm.value);
}
}
