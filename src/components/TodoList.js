import {TodoGroup} from "./TodoGroup";
import {TodoGenerator} from "./TodoGenerator";

export function TodoList() {
    return (
        <div>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}