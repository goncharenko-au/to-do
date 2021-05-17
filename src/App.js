import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from './components/Post';
import Field from './components/Field';
import Sidebar from './components/Sidebar';
import './App.scss';

export default function App() {
  const posts = useSelector(state => state.postReducer.posts);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="field">
          <div className="field__inner">
            <h1 className="field__title">TODO list </h1>
            <div className="field__header">
              <Field />
            </div>
            {posts.length > 0 ?
              <div>
                {
                  posts.map((item, id) => <Post id={id} key={`${item.name}${id}`}>{item}</Post>)
                }
              </div>
              :
              <div className="field__block-alttext">Список дел пуст...</div>
            }
          </div>
        </div>
        <Sidebar />

      </div >

    </div>
  );
};