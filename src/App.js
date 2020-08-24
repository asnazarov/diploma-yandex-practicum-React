import React, {Component} from "react";
import {hot} from "react-hot-loader";
import s from "./app.module.scss";
import Header from "./Components/Header/Header.jsx";
import Cover from "./Components/Cover/Cover.jsx";
import cover from './images/cover.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <div className={s.root__item}>
          <Header/>
          <Cover />
        </div>

        <img className={s.main__img} src={cover} alt="cover"/>
        <h1 className={s.main__title}> 123! </h1>
        <p>Тут будут новости</p>
        <p>text</p>
      </div>
    );
  }
}

export default hot(module)(App);
// export  default App;