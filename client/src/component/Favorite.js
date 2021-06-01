import React, { Component } from 'react';
import axios from "axios";


export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      psiData: '',
      showData: false
    };

  }
  componentDidMount() {
    const url = process.env.REACT_APP_SERVER_URL;
    axios.get(`http://localhost:8080//favorite`)
      .then(res => {
        const data = res.data;
        console.log(url);
        console.log(data);
        this.setState({ psiData: data, showData: true });
      })
  }
  delete(){

  }
  update(){
    
  }
  render() {

    return (
      <>{console.log(this.state.showData)}
        {this.state.showData && this.state.psiData.map((ele, i) => {
          return (
            <>
              <button onClick ={this.delete} >delete</button>
              <button >update</button>
              <h1>{ele.name}</h1>
              <h3>{ele.gender}</h3>
              <ul>
                {ele.power.map((power) => {
                  return (
                    <div>
                      <h3>{power.name}</h3>
                    </div>)
                })}
              </ul>
            </>
          )
        })}

      </>
    )
  }
}

export default Favorite
