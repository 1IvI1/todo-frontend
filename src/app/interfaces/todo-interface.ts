export interface ToDoItem {
    id?: number;
    title: string;
    description: string;
    status?: string;
}

export interface ToDoItemSwipe {
    start: number;
    isOpened: boolean;
}

export interface ToDoItemSelect {
    todoItemSelected: boolean;
    index: number;
}

export interface PopUpClosing {
    status: boolean;
    popUp: string;
}

export interface ToDoDoingDone {
    todo: number;
    doing: number;
    done: number;
}