import { Component } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {

  students: Istudent[];

  constructor(private studentService: StudentsService) {
    this.students = studentService.getAllStudents();
  }

}