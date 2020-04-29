import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { callApi } from './actions';
import Picture from './components/Picture';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #004266;
  width: 100%;
  height: 100vh;
`
const Button = styled.button`
  margin: 10px;
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 20px;
  padding: 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: #FFF;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  cursor: pointer;
  display: inline-block;
  border-radius: 25px;
  background-image: linear-gradient(to right, #00d2ff 0%, #3a7bd5 51%, #00d2ff 100%);
  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    margin: 8px 10px 12px;
    background-position: right center;
  }
`
const H1 = styled.h1`
 color: #00a6ff;
`

function App(props) {
  return (
    <Div>
      <H1>{props.word}</H1>
      <Picture/>
      <Button onClick={props.callApi}>Click Here For Random Cat Picture</Button>
    </Div>
  );
}

export default connect((state) => {
  return {
    word: state.word 
  }
}, { callApi: callApi })(App);
