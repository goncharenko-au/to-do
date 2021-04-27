import { combineReducers } from "redux";

const defaultState = {
    posts: [],
    post: { name: null, id: null, done: false, delete: false }
}

const postReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return { ...state, posts: [...state.posts, action.payload] };
        case "UPDATE_DONE":
            return { ...state, post: { ...state.post, done: action.payoad } };
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