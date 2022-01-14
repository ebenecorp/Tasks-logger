import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable,of } from 'rxjs';
import {TASKS} from '../mock-tasks';
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  )

}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiURL = 'http://localhost:5004/tasks'



  constructor(private http: HttpClient) { }

  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiURL)
  }

  deleteTask(task: Task): Observable<Task>{
    const url= `${this.apiURL}/${task.id}`

    return this.http.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task>{
    const url= `${this.apiURL}/${task.id}`

    return this.http.patch<Task>(url, task, httpOptions);
  }
  
  createTask(task:Task):Observable<Task>{

    return this.http.post<Task>(this.apiURL, task, httpOptions);


  }

}
