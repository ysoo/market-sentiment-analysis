import React, { Component } from 'react'
import './index.css';
import ForceDirectedGraph from '../ForceDirectedGraph';
import {returnHome} from '../NavBar/NavBarService';
class Home extends Component {

    constructor(props) {
      super(props);
      this.state = {
        message: false
      }

      this.messageContent = null
    }
      showComment = (data) => {
        if (data == null ) {
          this.messageContent = null
          this.setState({message:false})
        } else {
          if (data.level == 1) {
            this.messageContent =  (
              <div onClick={() => {this.moveToTrends(data)}}>
                  </div>
            )
          } else {
            this.messageContent = (
              <div className="infocard-content ">
                {
                  
                }
              </div>
            )
          }
          
  
          this.setState({message: true})
        }
        
      }

      componentDidMount() {
        returnHome(false)
      }

      moveToTrends = (data) => {
        this.props.history.push('/trends');
        returnHome(true)
      }

      render() {
        let data = {
          "nodes": [
            {"name": "me", "level": 0, "group": 0 },
            {"name": "iOS", "level": 1, "group": 1 },
            {"name": "C", "level": 1, "group": 2 },
            {"name": "React", "level": 1, "group": 3 },
            {"name": "Swift", "level": 2, "group": 1 },
            {"name": "Obj-C", "level": 2, "group": 1 },
            {"name": "React-Native", "level": 2, "group": 3 },
            {"name": "Python", "level": 1, "group": 4 },
            {"name": "C++", "level": 2, "group": 2 },
            {"name": "ML", "level": 1, "group": 3 },
            {"name": "GO", "level": 1, "group": 2},
            {"name": "node.js", "level": 2, "group": 1},
            {"name": "SQL", "level": 1, "group": 1}
          ],
          "links": [
            { "target": 1, "source": 0 },
            { "target": 2, "source": 0 },
            { "target": 3, "source": 0 },
            { "target": 4, "source": 1 },
            { "target": 5, "source": 1 },
            { "target": 6, "source": 3 },
            { "target": 7, "source": 0 },
            { "target": 8, "source": 2 },
            { "target": 9, "source": 0 },
            { "target": 10, "source": 0 },
            { "target": 11, "source": 10 },
            { "target": 12, "source": 0 }
          ]
        }
        return (
          <div className="home-content">
            <ForceDirectedGraph  data={data} showComment={this.showComment}/>
            {(this.state.message) && (this.messageContent != null) && (this.messageContent)}
          </div>
        )
      }
}

export default Home;
