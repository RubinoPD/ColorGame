import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColor';
import { generatePalette } from './colorHelpers';

function App() {
	return (
		<div>
			<Pallete palette={generatePalette(seedColors[4])} />
		</div>
	);
}

export default App;
