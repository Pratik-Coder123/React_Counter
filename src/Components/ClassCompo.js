import React, { Component } from 'react';

class ClassCompo extends Component {

constructor(){
    super();
    this.state={
        count:0 
    }
}
componentDidMount(){
    console.log("When component render first time");

}
  Increment(){
    this.setState({count:this.state.count+1})

}

    render() {
        return (
          <>
    <p>{this.state.count}</p>
      <button onClick={()=>{ this.Increment()}}>Increment with Class Compo</button>    
          </>
        );
    }
}

export default ClassCompo;