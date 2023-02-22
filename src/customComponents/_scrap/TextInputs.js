import React from 'react';
import '../scss/components/_text-input.scss';

const TextInputs = () => {
	return (
		<>
			<div className='field'>
				<label>Text Field</label>
				<input type='text' placeholder='Idle Field' />
			</div>
			<div className='field'>
				<label>Text Field</label>
				<input type='text' placeholder='Active Field' />
			</div>
			<div className='field'>
				<label>Text Field</label>
				<input type='text' placeholder='Required Field' required />
			</div>
		</>
	);
};

export default TextInputs;
