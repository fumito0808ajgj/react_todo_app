import React, { Component } from 'react';
import Form from './Form';
import List from  './List';
import Search from  './Search';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  handleAdd(e){
    e.preventDefault();

    this.state.todo.push({title: e.target.title.value});

    this.setState({todo: this.state.todo});

    e.target.title.value = '';
  }

  handleRemove(i){
    this.state.todo.splice(i,1);

    this.setState({todo: this.state.todo});
  }

  filterList= (e) =>{
    e.preventDefault();
    
    const updateList = this.state.todo.filter((item, key) => {
      console.log(item.title)
      console.log(e.target.title.value)
      return item.title.includes(e.target.title.value) == true
    })
    this.setState({todo: updateList})

    e.target.title.value = ''
  }

  render() {
    return (
      <div className="siimple-box siimple--bg-dark">
        <h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
        <Search filterList={this.filterList}/>
        <Form handleAdd={this.handleAdd}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} handleRemove={this.handleRemove}/>
      </div>
    );
  }
}