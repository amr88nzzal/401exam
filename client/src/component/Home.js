import React, { Component } from 'react'
import axios from "axios";





export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      psiData: '',
      showData: false
    };

  }
  componentDidMount() {
    const url = process.env.REACT_APP_SERVER_URL;
    axios.get(`http://localhost:8080/get-characters`)
      .then(res => {
        const data = res.data;
        console.log(url);
        console.log(data);
        this.setState({ psiData: data, showData: true });
      })
  }
  render() {

    return (
      <>{console.log(this.state.showData)}
        {this.state.showData && this.state.psiData.map((ele, i) => {
          return (
            <>
<button >add to favorite</button>
              <h1>{ele.name}</h1>
              <h3>{ele.gender}</h3>
              <img src = {ele.image} alr=' '/>

                {ele.psiPowers.map((power ) =>{
                  return(
              <div>

                  <img src = {power.img} alr=' '/>
                  <h3>{power.name}</h3>
              </div>)
                })}
            </>
          )
        })}

      </>
    )
  }
}

export default Home
