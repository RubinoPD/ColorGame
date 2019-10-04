import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Pallete.css';

export default class Pallete extends Component {
	render() {
		const colorBoxes = this.props.colors.map((color) => <ColorBox background={color.color} name={color.name} />);
		return (
			<div className="Pallete">
				{/* Navbar */}
				<div className="Pallete-colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}
