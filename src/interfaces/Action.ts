import { Todo } from "./Todo";

export interface Action {
    type: string;
    payload: Todo;
}