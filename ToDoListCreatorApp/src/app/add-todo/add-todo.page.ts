import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  taskName

  taskObject
  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async dismis() {
    await this.modalCtrl.dismiss(this.taskObject)
  }


  AddTask() {
    this.taskObject = ({itemName:this.taskName,
    }) 
    this.dismis()                      
  }
}
