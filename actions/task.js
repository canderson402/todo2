import { ADD_TASK, REMOVE_TASK, TOGGLE_INPUT } from '../constants/main';

export const addTask = (task) => {
    return {
        type: ADD_TASK,
        newTask: task
    }
}

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id: id
    }
}

export const toggleInput = (show) => {
    return {
        type: TOGGLE_INPUT,
        payload: show
    }
}