import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Istudent[] = [
    { id: 1, name: 'Samantha Gia', department: 'Arts', age: 32 },
    { id: 2, name: 'Taylor DiGulio', department: 'Tech', age: 31 },
    { id: 3, name: 'Monica Rivera', department: 'Logistics', age: 28 },

  ];
  constructor() { }
  getAllStudents() {
    return this.students;
  }

  getSingleStudent(id: number) {
    return this.students.find(stud => stud.id === id);
  }
}