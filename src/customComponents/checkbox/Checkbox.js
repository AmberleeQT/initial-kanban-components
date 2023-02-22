import React, { useState } from 'react';
import './_checkbox.scss';

const Checkbox = ({ label, checked, id, ...props }) => {
	const defaultChecked = checked ? checked : false;
	const [isChecked, setIsChecked] = useState(defaultChecked);
	return (
		<div className='wrapper'>
			<input
				type='checkbox'
				name=''
				id={id}
				checked={isChecked}
				onChange={() => setIsChecked((prev) => !prev)}
				{...props}
			/>
			<label htmlFor={id} className={isChecked ? 'checked' : ''}>
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
