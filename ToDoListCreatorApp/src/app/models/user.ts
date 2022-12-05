export interface User {
    userId: string;
    userEmail: string;
    userPhoto: string;
    createdAt: number;
}

export class Todo {
    taskId: number = 0;
    name: string = "";
    satus: number = 0;
    category: string = "";
}
