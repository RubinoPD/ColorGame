import React from 'react';
import Pallete from './Pallete';
import seedColors from './seedColor';

function App() {
	return (
		<div>
			<Pallete {...seedColors[4]} />
		</div>
	);
}

export default App;
