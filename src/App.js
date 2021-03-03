import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state=
    {
      newItem: "",
      list: []
    }
  };

  addItem(car){
    if(car!== ""){
      const newItem={
        id: Date.now(),
        value: car,
        isDone: false
      };
      const list=[...this.state.list];
      list.push(newItem);
      
      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deletecar(id){
    const list=[...this.state.list];
    const updatedlist = list.filter(item=>item.id !==id);
    this.setState({
      list: updatedlist
    })
  }
  
  updateInput(input){
    this.setState({newItem:input});
  }

  render(){
  return(
    <div>
          <h1 className="app-title">To Do :</h1>
          <div className="Add">
                Make an addition to the List:
                <br/>
                <input 
                type="text" 
                className="input-text"
                placeholder="Write here"
                required
                value={this.state.newItem}
                onChange={e => this.updateInput(e.target.value)}
                />
          <button className="add-btn" type="submit" onClick={()=> this.addItem(this.state.newItem)}>Add Item</button>
          </div>
          <br/>
          <div className="listing">
              <ul>
                {this.state.list.map(item =>{
                  return (
                    <div key={item.id}className="cont">
                      <li key={item.id}>
                        {item.value}
                      </li>
                      <button className="btn" onClick={()=>{this.deletecar(item.id)}}>Done</button>
                    </div>
                  );
                })}
              </ul>
          </div>
    </div>
  );
  }

}

export default App;