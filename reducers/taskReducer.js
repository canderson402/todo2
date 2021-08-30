import { ADD_TASK, REMOVE_TASK, TOGGLE_INPUT } from '../constants/main';

const initialState = {
    tasks: [],
    showInput: false
    };

const taskReducer = (state = initialState, action) => {
switch(action.type) {
    case ADD_TASK:
        return {
            ...state,
            tasks: [...state.tasks, action.newTask]
        };
    case REMOVE_TASK:
        return {
            ...state,
            tasks: state.tasks.filter((x) => { x.id != action.id } )
        };
    case TOGGLE_INPUT:
        return {
            ...state,
            showInput: action.payload
        };
    default:
    return state;
    }
}
export default taskReducer;