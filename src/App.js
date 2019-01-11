import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Lisff" surname="Urr" link="#" />
        <SayFullName name="Kor" surname="Pdd" link="#" />
        <SayFullName name="Abc" surname="Acc" link="#" />
      </div>
      
    );
  }
}

function SayFullName(props) {
  return (<div>
      <h2>Мое имя: {props.name}</h2>
      <h2>Моя фамилия: {props.surname}</h2>
      <a href={props.link}>Мой профиль</a>
  </div>)
}

export default App;
