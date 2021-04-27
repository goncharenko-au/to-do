import React, { useEffect } from "react";
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import Post from './components/Post';
import addPost from './action';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer.posts);


  const [value, setValue] = React.useState("");

  const getPost = () => {
    dispatch(addPost({ name: value, id: Math.round(Math.random() * 1000), done: false, delete: false }));
    setValue("");
  }

  const newPost = (e) => {
    setValue(e.target.value);
  }

  const date = new Date();


  console.log(posts);
  return (
    <div className="container">
      <div className="field">
        <div className="field__inner">
          <h1 className="field__title">TODO list </h1>
          <h2 className="field__date">{`${date.getDate()}.${"0" + (date.getMonth() + 1)}.${date.getFullYear()}`}</h2>
          {/* <span className="field__time">{`В Україні: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`}</span> */}
          <div className="field__header">
            <input className="field__input" value={value} onChange={newPost} />
            <button className="field__btn" onClick={() => getPost()}>Добавить</button>
          </div>
          {
            posts.map(item => <Post key={Math.round(Math.random() * 1000)}>{item}</Post>)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
