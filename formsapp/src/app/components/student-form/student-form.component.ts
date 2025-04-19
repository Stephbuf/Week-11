import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { ActivatedRoute } from '@angular/router';
import { Idepartment } from '../../interfaces/idepartment';
import { DepartmentsService } from '../../services/departments.service';

@Component({
  selector: 'app-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {

  studentForm;
  isEdit: boolean = false; //default is create mode, need to make it true to be in edit mode
  editStudentId!: number;
  departments!: Idepartment[];



  constructor(private fb: FormBuilder, private studentService: StudentsService, private route: ActivatedRoute, private deptService: DepartmentsService) {

    this.studentForm = this.fb.group({
      name: ['', [Validators.required]],
      department_id: [0, [Validators.required]],
      age: [0, [Validators.required]],
    });

    // get all departments 
    this.deptService.getAllDepartments().subscribe(result => {
      this.departments = result;
    })

    // retrieve student ID form URL
    let studentId: any = this.route.snapshot.paramMap.get('student_id');


    //checking if to enter edit mode
    if (studentId) {
      this.editStudentId = parseInt(studentId); //convert student ID to number
      this.isEdit = true;


      //retrieve student data from backend
      this.studentService.getSingleStudent(this.editStudentId).subscribe(result => {
        this.studentForm.patchValue(result); //populate form with student data
      });

    }

  }

  onSubmit() {
    if (this.isEdit) {
      this.updateStudent();
    } else {
      this.createStudent();
    }
  }

  createStudent() {
    const formData = this.studentForm.value;
    this.studentService.createStudent(formData).subscribe(result => {
      alert('Student was created successfully! - lucky you');
      this.studentForm.reset();
    });
  }
  updateStudent() {
    const formData = this.studentForm.value;
    this.studentService.updateStudent(this.editStudentId, formData).subscribe(result => {
      console.log(result);
      alert('Student was updated succecfully');
      this.studentForm.reset();
    });

  }
}