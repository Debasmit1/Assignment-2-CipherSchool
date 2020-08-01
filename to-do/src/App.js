import React from 'react';
import Navbar from './components/Navbar';
import AddItem from './components/AddItem';
import Display from './components/Display.js'

class App extends React.Component{

  state={
        lists:[],
        text : ''
  }

  addItem = (item) => {

    item.id = Date.now();
    console.log(item);

    let lists = [...this.state.lists,item];

    this.setState({
           lists : lists
     })
  }


  deleteItem = (id) => {

    let newList = this.state.lists.filter( item => item.id !== id);

    this.setState({
         lists:newList
    })
  }


  render(){
    return(
      <div className="App">
        <Navbar heading = "to-do list"/>
        <AddItem addItem={this.addItem}/>
        <Display lists= {this.state.lists} deleteItem= {this.deleteItem} />
      </div>
    );
  }
}

export default App;
