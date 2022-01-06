import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  @Output() onAddTask:EventEmitter<Task> = new EventEmitter()

  text!:string;
  day!:string;
  reminder:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please enter a task')
      return 
    }


    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)


    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
