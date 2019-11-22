import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

export default class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		return <div>{palettes.map((palette) => <MiniPalette {...palette} />)}</div>;
	}
}
