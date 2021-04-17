import './App.css';
import React, { Component } from 'react'
import Cards from "./components/Cards/Cards";
import CountrySelect from "./components/CountrySelect/CountrySelect";
import { fetchData } from './api';


export default class App extends Component {


  state = {
    data: {}
  };

    async componentDidMount(){
      const dataloaded = await fetchData();
      this.setState({data: dataloaded})
    }

  render() {
    const { data } = this.state
    return (
      <div className="container">
        <h1>Covid Tracker</h1>
        <Cards data = {data}/>
    </div>
    )
  }
}

