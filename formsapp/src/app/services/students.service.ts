import { Injectable } from '@angular/core';
import { Istudent } from '../interfaces/istudent';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  constructor(private http: HttpClient) { } //helps make API calls 

  //getting data from all students
  getAllStudents() {
    return this.http.get<Istudent[]>('http://localhost:3000/students'); // defining the structure we are looking for in the backend "[]"= array of data that has all students
  }

  //getting data of a single student based on the student ID
  getSingleStudent(id: number) {
    return this.http.get<Istudent>('http://localhost:3000/students/' + id);
  }


  createStudent(formData: any){
    return this.http.post<Istudent>('http://localhost:3000/students/', formData);
  }

  removeStudent(id: number) {
    return this.http.delete<Istudent>('http://localhost:3000/students/' + id);
  }

  updateStudent(id: number, formData: any) {
    return this.http.patch<Istudent>('http://localhost:3000/students/' + id, formData);
  }
}
