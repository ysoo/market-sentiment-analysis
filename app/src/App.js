import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
// import logo from './logo.svg';
import './App.css';
import  StockTable from './StockTable';
import  SearchBar from './SearchBar';
import  NewsFeed  from "./NewsFeed";
import Chart from './Chart';


class App extends Component {
  
  
  render() {
    return (
      <div className="App">
        <SearchBar /> 
          <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <NewsFeed />
              <Chart />
            </Grid.Column>
            <Grid.Column>
             <StockTable /> 
            </Grid.Column>
        
          </Grid.Row>
        </Grid>  
      </div>


    );
  }
}

export default App;
