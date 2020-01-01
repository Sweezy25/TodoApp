import React from 'react';
import InputList from './InputList';
import TodoList from '../TodoList/TodoList';
import Header from '../../components/Header';

export default class MainPage extends React.Component {
  render() {
    return(
      <div className="bg_color">
        <Header/>
        <InputList/>
        <TodoList/>
      </div>
    );
  }
}