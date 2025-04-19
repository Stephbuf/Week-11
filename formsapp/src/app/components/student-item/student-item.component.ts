import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Istudent } from '../../interfaces/istudent';

@Component({
  selector: 'app-student-item',
  standalone: false,
  templateUrl: './student-item.component.html',
  styleUrl: './student-item.component.css'
})


export class StudentItemComponent implements OnChanges {
  

  //property
  @Input() student!: Istudent;
  @Output() deleteStudentEvent = new EventEmitter();

  
  //methods
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes); //will tell you exactly when it was changed 
  }

  onDelete() {
    this.deleteStudentEvent.emit(this.student.id); // triggering the custom event 

  }
}
