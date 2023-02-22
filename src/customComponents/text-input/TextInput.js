import React, { useRef } from 'react';
import './_text-input.scss';

const TextInput = ({
	label,
	name,
	placeholder,
	value,
	errors,
	onChange,
	required,
}) => {
	const inputRef = useRef(null);

	const handleClick = () => {
		if (inputRef && inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<div className='field'>
			<label htmlFor={name}>{label}</label>
			<input
				ref={inputRef}
				arial-label={name}
				// tabIndex={0}
				name={name}
				type='text'
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				required={required}
				onClick={handleClick}
			/>
			{errors && !value && required && <p>Can't be empty</p>}
			{}
		</div>
	);
};

export default TextInput;

/*
	label='text field (active)'
	name='idle'
	placeholder='enter task name'
	value={active}
	errors={errors}
	onChange={handleChange}
*/

/* 
	Error:
		_borderColor_ 
			errors ? $red : $dark-grey-25
		_text_
			?? text-align: right
			font-weight: 500
			font-size: 13px
			line-height: 23px
			color: $red
			padding/margin: 8px 16px 8px auto;

			position: absolute;
			top: 8px;
			right: 16px 

*/
