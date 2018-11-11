import React,  { Component } from 'react';
import './index.css';

export default class Arrow extends Component {

	constructor(props) {
		super(props);

		// equivalent to getInitialState() { return {}; }
		this.state = {

		}


	}

	render(){
		var extra =""
		if (this.props.isDown) {
			extra += "down "
		}
		return (
			<div className="arrowbox">
				<div className="bounce">
				  <div className= {"arrow "+extra}>
				  </div>
				</div>
			</div>
		);
	}

}

Arrow.propTypes = {

}

Arrow.defaultProps = {

}
