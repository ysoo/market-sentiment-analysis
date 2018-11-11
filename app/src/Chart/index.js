import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
class Chart extends Component {
    constructor(props)  {
        super(props);
        this.state = {
            data : {
                labels: ["one", "two", "three","one", "two", "three"], // array of strings
                datasets: [
                {
                    label : "Company Name", // name of label
                    borderColor : '#FF8080',
                    backgroundColor : 'rgba(0,0,0,0.0)',
                    
                    data : [4,15, -8,15,30, 9], // array of strings
                },{
                    label : "Economy Name", // name of label
                    borderColor : '#FFED9F',
                    backgroundColor : 'rgba(0,0,0,0.0)',
                    
                    data : [10,5, -7,20,30, 18],
                }], // array of dicts
            }
        }
    }

            
      render(){
          let options = {
              maintainAspectRatio : false,
              legend: {
                display: false,
                position: 'right',
                labels: {
                    fontColor: '#FFF',
                    fontFamily: 'AvenirNext',
                    fontSize: 13
                }
                },
                responsive: true,
              scales: {
                  xAxes: [
                    {
                        display: true,
                        gridLines: {
                          display: false,
                          drawBorder: false
                        },
                        
                      }
                  ],
                  yAxes: [
                    {
                        display: true,
                        gridLines: {
                          display: false,
                          drawBorder: false
                        }
                      }
                  ],
              },
              
            }
        return (
        <Line 
            data = {this.state.data}
            options = {options}
            width={this.props.width}
            height={this.props.height}
        />

        );
      }
      
}

export default Chart;