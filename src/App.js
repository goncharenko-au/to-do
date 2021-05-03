import React, { useEffect, useState } from "react";
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import Post from './components/Post';
import addPost from './action';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer.posts);

  const [value, setValue] = useState("");

  const getPost = () => {
    if (value) {
      dispatch(addPost({ name: value, done: false }));
    }
    setValue("");
  };

  const newPost = (e) => {
    setValue(e.target.value);
  };

  const date = new Date();

  const getCurDate = () => {
    let curDate = date.getDate();
    if (curDate <= 9) {
      return `0${curDate}`;
    } else {
      return curDate;
    }
  };

  const getCurMonth = () => {
    let month = date.getMonth();
    if (month <= 9) {
      return `0${month + 1}`;
    } else {
      return month + 1;
    }
  };

  const getCurTime = () => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    const curHours = hours <= 9 ? `0${hours}` : hours;
    const curMinutes = minutes <= 9 ? `0${minutes}` : minutes;
    const curSeconds = seconds <= 9 ? `0${seconds}` : seconds;
    return `${curHours}:${curMinutes}:${curSeconds}`;
  };

  const currentDate = `${getCurDate()}.${getCurMonth()}.${date.getFullYear()}`;
  const currentTime = getCurTime();


  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    setInterval(() => setTime(getCurTime()), 1000);
  }, [currentTime]);

  return (
    <div className="container">
      <div className="field">
        <div className="field__inner">
          <h1 className="field__title">TODO list </h1>
          <div className="field__wrap">
            <div className="field__date">
              {currentDate}</div>
            <div className="field__time">
              {currentTime}
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
                posts.map((item, id) => <Post id={id} key={`Math.round(Math.random() * 100000) ${item.name}`}>{item}</Post>)
              }
            </div>
            :
            <div className="field__block-alttext">Список дел пуст...</div>

          }


          {/* {
            posts.map((item, id) => <Post id={id} key={Math.round(Math.random() * 1000)}>{item}</Post>)
          } */}
        </div>
      </div>
    </div >
  );
}

export default App;
