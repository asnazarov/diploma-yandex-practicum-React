import React, { Component} from "react";
import {hot} from "react-hot-loader";
import s from "./app.module.css";
import Header from "./Components/Header.jsx";
import cover from './images/cover.jpg';

class App extends Component{
  render(){
    return(
      <div >
        <Header />
        <img className={s.main__img} src={cover} alt="cover" />
        <h1 className={s.main__title}> 123! </h1>
        <p>Тут будут новости</p>
        <p>text</p>
      </div>
    );
  }
}

export default hot(module)(App);
// export  default App;