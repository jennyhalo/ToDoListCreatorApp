import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    formData:Todo = new Todo();
    public list: Todo[] = [];

    constructor() {
        this.resetForm();       
    }

    resetForm() {
        this.formData = new Todo();
        this.formData.taskId = this.getRandomInt(0, 999999);
        this.formData.category = 'personal';
    }

    changeStatus(id: number) {
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i].taskId == id) {
                this.list[i].status = (this.list[i].status == 0? 1: 0);
            }
        }
    }

    createTodo() {
        this.list.push(this.formData);
    }

    getTodo(id: number): any {
        let todo: any;
        this.list.forEach(item => {
            if(item.taskId == id)
                todo = item;
        });
        
        return todo;
    }

    updateTodo() {
        for(let i = 0; i < this.list.length; i++) {
            if(this.list[i].taskId == this.formData.taskId) {
                this.list[i] = this.formData;
            }
        }
    }

    deleteTodo(id: number) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].taskId == id) {
                this.list.splice(i, 1);
            }
        }
    }

    getCount(category: string) {
        let tasks: any = [];
        for (let i = 0; i < this.list.length; i++) {
            if(this.list[i].category == category) {
                tasks.push(this.list[i])
            }
        }

        return new Set(tasks).size;
    }

    getCategoryProgressCount(category: string) {
        if(this.getCount(category) > 0)
        return this.getCount(category)/this.list.length;
        else
        return 0;
    }

    getRandomInt(min: any, max: any) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}