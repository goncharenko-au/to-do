import React, { useState } from "react";
import { useDispatch } from "react-redux";
import addPost from '../action';

export default function Input() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const newPost = (e) => {
        setValue(e.target.value);
    };

    const getPost = () => {
        if (value) {
            dispatch(addPost({ name: value, done: false }));
        }
        setValue("");
    };

    return (
        <>
            <input className="field__input" value={value} onChange={newPost}
                onKeyDown={(e) => e.code === "Enter" && value !== "" ? getPost() : null} />
            <button className="field__btn" onClick={() => getPost()}
                onKeyDown={(e) => console.log(e)}
            >Добавить</button>
        </>
    )
}