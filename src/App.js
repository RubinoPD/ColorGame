import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColor';
import { generatePalette } from './colorHelpers';

function App() {
	console.log(generatePalette(seedColors[4]));
	return (
		<div>
			<Pallete {...seedColors[4]} />
		</div>
	);
}

export default App;
