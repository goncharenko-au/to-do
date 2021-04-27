const addPost = (value) => ({
    type: "ADD_POST",
    payload: value
})

export default addPost;

export const updateDone = (done) => ({
    type: "UPDATE_DONE",
    payload: done
})

export const deletePost = (id) => ({
    type: "DELETE_POST",
    payload: id
})