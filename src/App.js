import React, { useEffect, useState } from "react";
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import Post from './components/Post';
import addPost from './action';

function App() {
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

  const date = new Date();

  function addedZero(value, correction = 0) {
    const resultValue = value + correction;
    if (resultValue <= 9) {
      return `0${resultValue}`;
    } else {
      return resultValue;
    }
  }

  const getCurDate = () => {
    let curDate = addedZero(date.getDate());
    let curMonth = addedZero(date.getMonth(), 1);
    return `${curDate}.${curMonth}.${date.getFullYear()}`;
  };

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
  }, [setTime]);
  return (
    <div className="wrapper">
      <div className="container">
        <div className="field">
          <div className="field__inner">
            <h1 className="field__title">TODO list </h1>
            <div className="field__wrap">
              <div className="field__date">
                {getCurDate()}</div>
              <div className="field__time">
                {time}
              </div>
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
}

export default App;
