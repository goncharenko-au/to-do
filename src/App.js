import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.scss';
import Post from './components/Post';
import DateTodo from './components/Date';
import addPost from './action';


export default function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer.posts);

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

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);


  return (
    <div className="wrapper">
      <div className="container">
        <div className="field">
          <div className="field__inner">
            <h1 className="field__title">TODO list </h1>
            <div className="field__wrap">
              <DateTodo />
            </div>

            <div className="field__header">
              <input className="field__input" value={value} onChange={newPost}
                onKeyDown={(e) => e.code === "Enter" && value !== "" ? getPost() : null} />
              <button className="field__btn" onClick={() => getPost()}
                onKeyDown={(e) => console.log(e)}
              >Добавить</button>
            </div>
            {posts.length > 0 ?
              <div>
                {
                  posts.map((item, id) => <Post id={id} key={Math.round(Math.random() * 100000)}>{item}</Post>)
                }
              </div>
              :
              <div className="field__block-alttext">Список дел пуст...</div>
            }
          </div>
        </div>
      </div >
    </div>
  );
};