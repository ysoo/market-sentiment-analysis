import React, { Component } from 'react'
import './index.css';

class ContentItem extends Component {
      render() {
        return (
          <div className="card-content">
            <div className="circle-label"><div>{this.props.counter}</div></div>
            <p className="item-content">{this.props.content}</p>
          </div>
        )
      }
}

export default ContentItem;
