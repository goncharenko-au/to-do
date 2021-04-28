const addPost = (value) => ({
    type: "ADD_POST",
    payload: value
})

export default addPost;

export const updateDone = (data) => ({
    type: "UPDATE_DONE",
    payload: data
})

export const deletePost = (id) => ({
    type: "DELETE_POST",
    payload: id
})