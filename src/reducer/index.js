import { combineReducers } from "redux";

const defaultState = {
    posts: [],
    post: {}
}

const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return { ...state, posts: [...state.posts, action.payload] };
        case "UPDATE_DONE":
            return {
                ...state, posts: [...state.posts.slice(0, action.payload.id), { ...action.payload.children, done: !action.payload.children.done }, ...state.posts.slice(action.payload.id + 1)]
            };
        case "DELETE_POST":
            return { ...state, posts: [...state.posts.slice(0, action.payload), ...state.posts.slice(action.payload + 1)] }
        default:
            return state;
    }
}


const rootReducer = combineReducers({
    postReducer,
})
export default rootReducer;

