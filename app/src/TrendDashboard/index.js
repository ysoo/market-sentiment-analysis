import React, { Component } from 'react'
import Chart from '../Chart';
import './index.css';
import { Grid, Image } from 'semantic-ui-react'
import ContentItem from '../ContentItem';
import CompanyTag from '../CompanyTag';
import Lottie from 'react-lottie';
import angery from './angery.json';
import laugh from './laugh.json';
import wow from './wow.json';
import {returnHome} from '../NavBar/NavBarService';
class TrendDashboard extends Component {

  componentDidMount() {
    console.log("Mount")
    returnHome(true)
    console.log(this.refs.button.getBoundingClientRect())
  }
  renderGridNews =() => {
    let data = [{
     
      content: 'test test test tes t'
    },{
     
      content: 'test testfasdfa test tes t'
    },{
     
      content: 'test test sdstest tes t'
    },{
     
      content: 'test test test tes t'
    }]

    return (
      <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <ContentItem counter={1} content={data[0].content}/>
        </Grid.Column>
        <Grid.Column>
          <ContentItem counter={2} content={data[1].content}/>  
        </Grid.Column>
      
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <ContentItem counter={3} content={data[2].content}/>
        </Grid.Column>
        <Grid.Column>
        <ContentItem counter={4} content={data[3].content}/>
        </Grid.Column>
       
      </Grid.Row>
    </Grid>
    )
  }
      render() {
        const defaultOptions = {
          loop: true,
          autoplay: true, 
          animationData: angery,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        };

        return (
          <div className="content">
            <div ref="button" className="background-chart">
               <Chart />
            </div>
            <CompanyTag />
            <div className="card">
              {this.renderGridNews()}
            </div>
            <div className="animation">
            <Lottie options={defaultOptions}
              height={300}
              width={300}
              />
            </div>
          </div>
        )
      }
}

export default TrendDashboard;
