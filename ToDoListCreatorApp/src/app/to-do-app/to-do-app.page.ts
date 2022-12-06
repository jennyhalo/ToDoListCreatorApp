import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTodoPage } from '../add-todo/add-todo.page';
import { AvatarService } from '../services/avatar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-app',
  templateUrl: './to-do-app.page.html',
  styleUrls: ['./to-do-app.page.scss'],
})
export class ToDoAppPage implements OnInit {

  todoList: any[] = []

  today : number = Date.now()
  profile: import("@angular/fire/firestore").DocumentData;
  constructor
  (
    public modalCtrl:ModalController,
    private avatarService: AvatarService,
    private router: Router
    
    ) { 
      this.avatarService.getUserProfile().subscribe((data) => {
        this.profile = data;
      });
    }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddTodoPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      this.todoList.push(newTaskObj.data)
    })
    return await modal.present()
  }

  delete(index) {
    this.todoList.splice(index,1)
  }
  gotoprofile() {
    this.router.navigate(['/profile']);
  }
  ngOnInit() {
  }

}
