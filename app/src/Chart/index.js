import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
class Chart extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            data : {
                labels: ["one", "two", "three"], // array of strings
                datasets: [
                {
                    label : "Company Name", // name of label
                    borderColor : '',
                    backgroundColor : 'rgba(0,0,0,0.0)',
                    data : [10,20,30], // array of strings
                },
                {
                    
                }], // array of dicts
            }
        }
    }

            
      render(){
        return (<div>
        <Line 
            data = {this.state.data}
            options = {{maintainAspectRatio : false}}
            width = {500}
            height = {500}
        />

        </div>);
      }
      
}

export default Chart;