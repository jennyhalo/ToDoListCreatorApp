import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTodoPage } from '../add-todo/add-todo.page';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.page.html',
  styleUrls: ['./to-do-app.page.scss'],
})
export class ToDoAppPage implements OnInit {

  todoList: any[] = []

  today : number = Date.now()

  constructor(public modalCtrl:ModalController) { }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddTodoPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      this.todoList.push(newTaskObj.data)
    })
    return await modal.present()
  }

  ngOnInit() {
  }

}
