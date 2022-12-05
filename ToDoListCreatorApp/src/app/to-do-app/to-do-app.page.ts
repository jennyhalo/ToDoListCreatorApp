import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.page.html',
  styleUrls: ['./to-do-app.page.scss'],
})
export class ToDoAppPage implements OnInit {

  todoList = [{
    itemName : 'Coding',
    itemDueDate: '13-10-21',
    itemPriority: 'high',
    itemCategory: 'Work' 
  },
  {
    itemName : 'Coding',
    itemDueDate: '13-10-21',
    itemPriority: 'low',
    itemCategory: 'Word' 
  },
  {
    itemName : 'Workout',
    itemDueDate: '13-05-22',
    itemPriority: 'high',
    itemCategory: 'Personal' 
  }
]

  today : number = Date.now()

  constructor() { }

  ngOnInit() {
  }

}
